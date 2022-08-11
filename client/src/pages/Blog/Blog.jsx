import React from 'react'
import './Blog.css'
import Frame from 'react-frame-component';


function Blog() {

    return (
        <div className='blogbody'>
           
           <div><br/></div>
            <center><h1><b>MERN STACK BASE APP</b></h1></center>
            
            <h4 className='subhead'>Environment Setup for Backend</h4>

            <code className='code'>npm init -y</code>
            <small className='small'>This command will create a package.json file for us, from where we will be able to manage our installed packages and also control the version of our application.</small>
        
            <code className='code'>npm install express mongoose cors nodemon</code>
            <small className='small'>Here, with the help of this command, we will be able to install both at a single time. The express will use to write NodeJS code and set up endpoints and Mongoose will be used to create a database model and save data. The CORS is referred to as Cross-Origin-Resource-Sharing which will help us to build a connection with the frontend. The nodemon help to restart our server after everychange</small>

            <h4 className='subhead'>Create Node Server</h4>
            <Frame className='frame' width="80%" height="290px" initialContent='<script src="https://gist.github.com/gokulhans/f9d9acfa67663dda92a9ff36c1793325.js"></script>' />
          
            <h4 className='subhead'>Connect MongoDB Database</h4>
            <Frame className='frame' width="80%" height="300px" initialContent='<script src="https://gist.github.com/gokulhans/6b4aa66a16d8b7e575a17e07665d7f2b.js"></script>' />
            <small className='small'>After connecting the MongoDB database, it is time to create our database schema model. That will give the shape of the data and define how the data will be stored in the database. We will create it into a separate folder and will name it Model and inside the model folder, we will create a folder named PhoneBook.js Inside this folder, we will create a simple database schema model. See the below code example:</small>
            
            <h4 className='subhead'>Create Mongoose model</h4>
            <Frame className='frame' width="80%" height="430px" initialContent='<script src="https://gist.github.com/gokulhans/d409a440b77f4eed74ebfd604c0c34ab.js"></script>' />
            <small className='small'>Here, you can see that we have created a schema model where we will store two types of data. One is the name which type is String and another one is the phone which type is Number We also set them as required: true as a result, it will throw a mongo error if any fields remain empty. Finally, we have exported this schema model so that we can use it by importing it into another file.</small>
            

            <h4 className='subhead'><b>Environment setup for Frontend</b></h4>

            {/* <Frame className='frame' width="80%" height="290px" initialContent='' /> */}
            <code className="code"></code>
            <small className='small'></small>
            <h4 className='subhead'><b>Environment setup for Frontend</b></h4>

            {/* <Frame className='frame' width="80%" height="290px" initialContent='' /> */}
            <code className="code">npx create-react-app client</code>
            <small className='small'></small>
            <h4 className='subhead'><b>Environment setup for Frontend</b></h4>

            {/* <Frame className='frame' width="80%" height="290px" initialContent='' /> */}
            <code className="code"></code>
            <small className='small'></small>


        </div>
    )
}

export default Blog
