import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

import Axios from 'axios'


function Code() {

  const [action, setAction] = useState('')
  const [fe, setfe] = useState('')
  const [be, setbe] = useState('')
  const [db, setdb] = useState('')
  const [link, setlink] = useState('')
  
  const submitCode = () => {
    Axios.post('/getsnippets', { action,fe,be,link,db }).then((res)=>{
        console.log(res.data);
    })
  }
  
  /*
   {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
         */


  return (
    <div className='minw minh'>
 <label htmlFor="">Action</label>
 <Form.Select aria-label="Default select example" onChange={e=>setAction(e.target.value)}>
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
      <option value="d">d</option>
    </Form.Select>

    <label htmlFor="">FrontEnd</label>

 <Form.Select aria-label="Default select example" onChange={e=>setfe(e.target.value)}>
      <option value="reactjs">React JS</option>
      
    </Form.Select>
    <label htmlFor="">Backend</label>

 <Form.Select aria-label="Default select example" onChange={e=>setbe(e.target.value)}>
      <option value="nodejs">Node JS</option>
 
    </Form.Select>
    <label htmlFor="">Database</label>

    <Form.Select aria-label="Default select example" onChange={e=>setdb(e.target.value)}>
      <option value="mongoose">Mongoose</option>
      <option value="1">Mongodb</option>
     
    </Form.Select>
    <label htmlFor="">Linking</label>
    
    <Form.Select aria-label="Default select example" onChange={e=>setlink(e.target.value)}>
      <option value="linkreact">React</option>
    </Form.Select>
<br />
<br />
    <button onClick={submitCode} >Get Code</button>

    </div>

  )
}

export default Code