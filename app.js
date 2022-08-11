const express = require('express')
const cors = require('cors')
const app = express()
var db = require('./connection')
var ObjectId = require('mongodb').ObjectId

db.connect((err) => {
    if (err) console.log("Connection Error" + err);
    else console.log("Database connected to port")
})

app.use(express.json())
app.use(cors())
const PORT = 5000

// const CodeBook = require('./model/Codebook')

// const mongoose = require('mongoose')

// const DB = 'mongodb+srv://gbrozdev:gbrozdev@cluster0.pgxe9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('Database connected..')
// })

app.post('/uploadcode', async (req, res) => {

    // const mernCode = new CodeBook(req.body)
    console.log(req.body);

    let code = req.body;



    try {
        // await mernCode.save()
        
        db.get().collection('codes').insertOne(code)
        db.get().collection('frontend').insertOne({ action: code.name, code: code.design, frontend: "reactjs" })
        db.get().collection('backend').insertOne({ action: code.name, code: code.node, backend: "nodejs" })
        db.get().collection('linking').insertOne({ action: code.name, code: code.react, frontend: "reactjs" })
        db.get().collection('database').insertOne({ action: code.name, code: code.mongoose, db: "mongoose" })

        res.status(201).json({
            status: 'Success',
            data: {
                code
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

app.get('/findcode/:query', async (req, res) => {
    console.log(req.params.query);

    let query = req.params.query;
    let frontend = await db.get().collection('frontend').findOne({ action: query })
    let backend = await db.get().collection('backend').findOne({ action: query })
    let linking = await db.get().collection('linking').findOne({ action: query })
    let database = await db.get().collection('db').findOne({ action: query })

    console.log(frontend, backend, linking, database);
})


app.get('/getcodes', async (req, res) => {
    // const mernCode = await CodeBook.find({})
    let codes = await db.get().collection('codes').find().toArray()
    console.log(codes);
    try {
        res.status(200).json(codes)
        /*
        {
            status: 'Success',
            data:codes
        } */
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})


app.put('/updatecode/:id', async (req, res) => {
    // const updatedCode = await CodeBook.findByIdAndUpdate(req.params.id, req.body, {
    //     new: true,
    //     runValidators: true
    // })
    let obj = { _id: ObjectId(req.params.id) }
    var query = {
        $set: {
            name: req.body.name, node: req.body.node,
            react: req.body.react, mongoose: req.body.mongoose,
            design: req.body.design
        }
    }

    let updatedCode = await db.get().collection('codes').updateOne(obj, query)

    console.log(updatedCode);
    try {

        res.status(200).json({
            status: 'Success',
            data: {
                updatedCode
            }
        })
    } catch (err) {
        console.log(err)
    }
})

app.delete('/deletecode/:id', async (req, res) => {
    // await CodeBook.findByIdAndDelete(req.params.id)
    db.get().collection('codes').deleteOne({ _id: ObjectId(id) })

    try {
        res.status(204).json({
            status: 'Success',
            data: {}
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.json({
//         message: err.message,
//         error: err
//       });
// });

// server listening

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is listening on ${PORT}`);
})

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
    app.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}