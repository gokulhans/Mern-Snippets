import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Axios from 'axios'

function Upload() {

  const [name, setName] = useState('')
  const [node, setNode] = useState(0)
  const [react, setReact] = useState(0)
  const [mongoose, setMongoose] = useState(0)
  const [design, setDesign] = useState(0)

  const uploadCode = () => {
    Axios.post('/uploadcode', { name, node, react, mongoose, design })
    console.log("called");
    console.log(name,node,react,mongoose,design);
  }

  return (
    <div className="minw minh">
      <h3>Upload Code</h3>
      <br />

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Action Name</Form.Label>
          <Form.Control type="name" onChange={(e) => { setName(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Node JS</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => { setNode(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>React Linking Code</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => { setReact(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mongoose</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => { setMongoose(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Design</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => { setDesign(e.target.value) }} />
        </Form.Group>
        <Button variant="primary" onClick={uploadCode} type="submit">
          Upload
        </Button>
      </Form>
    </div>
  )
}

export default Upload