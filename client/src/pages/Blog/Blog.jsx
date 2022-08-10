import React from 'react'
// import Blogcard from '../../components/Blogcard/Blogcard';
import './Blog.css'
import {ReactEmbedGist} from 'react-embed-gist';

function Blog() {
    
    return (
        <div className='blogbody'>
            <h3>STARTING</h3>
            <script src="https://gist.github.com/gokulhans/b8aef855d2d43a95eae20d41eeea93ba.js"></script>
            {/* <Blogcard data = 'code'/> */}

            <ReactEmbedGist
     gist="gokulhans/b8aef855d2d43a95eae20d41eeea93ba"
     wrapperClass="gist__bash"
     loadingClass="loading__screen"
     titleClass="gist__title"
     errorClass="gist__error"
     contentClass="gist__content"
     file=".bash_profile.sh"
   />
        </div>
    )
}

export default Blog