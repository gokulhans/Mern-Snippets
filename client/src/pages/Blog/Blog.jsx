import React from 'react'
import './Blog.css'
import Frame from 'react-frame-component';

function Blog() {

    return (
        <div className='blogbody'>

            <h4 className='subhead'>Create Node Server</h4>
            <Frame width="100%" height="300px" initialContent='<script src="https://gist.github.com/gokulhans/f9d9acfa67663dda92a9ff36c1793325.js"></script>' />
        
            <h4 className='subhead'>Connect MongoDB Database</h4>
            <Frame width="100%" height="300px" initialContent='<script src="https://gist.github.com/gokulhans/6b4aa66a16d8b7e575a17e07665d7f2b.js"></script>' />
        
        </div>
    )
}

export default Blog