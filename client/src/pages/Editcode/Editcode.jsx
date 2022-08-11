import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'

function Editcode() {
 
  const [codebook, setCodebook] = useState([])

  useEffect(() => {
    axios.get('http://code-snippets-mern.herokuapp.com/getcodes').then(res => {
      console.log(res.data);
      setCodebook(res.data)
    })
  }, [])

  const deleteCode = (id) => {
    axios.delete(`/deletecode/${id}`)
    window.location.reload(true);
  }

  const [name, setName] = useState('')
  const [node, setNode] = useState(0)
  const [react, setReact] = useState(0)
  const [mongoose, setMongoose] = useState(0)
  const [design, setDesign] = useState(0)

  const updateCode = async (id) => {
    await axios.put(`/updatecode/${id}`, { id, name, node, react, mongoose, design })
    window.location.reload(true);
  }

  return (
    <div className="minh">
      {
        codebook.map((val, key) => {
          return <div key={key}>

<div className="box">

            <input type="name" placeholder={val.name} onChange={(e) => { setName(e.target.value) }} />
            <input type="name" placeholder={val.node} onChange={(e) => { setNode(e.target.value) }} />
            <input type="name" placeholder={val.react} onChange={(e) => { setReact(e.target.value) }} />
            <input type="name" placeholder={val.mongoose} onChange={(e) => { setMongoose(e.target.value) }} />
            <input type="name" placeholder={val.design} onChange={(e) => { setDesign(e.target.value) }} />



            <button className='update-btn' onClick={() => { updateCode(val._id) }}>Update</button>
            <button className='delete-btn' onClick={() => { deleteCode(val._id) }}>Delete</button>
</div>
          </div>
        })
      }

    </div>
  );
}

export default Editcode