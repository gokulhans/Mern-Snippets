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

app.get('/getcodes', async (req, res) => {
    // const mernCode = await CodeBook.find({})
    let codes = await db.get().collection('codes').find().toArray()
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                codes
            }
        })
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
            name: req.body.name, gmail: req.body.gmail
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

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})