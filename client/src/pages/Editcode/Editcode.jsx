import React from 'react'
import { Form, Button } from 'react-bootstrap'

function Editcode() {
  return (
    <div className="minw minh">
    <h3>Edit Code</h3>
    <br />

    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Code Name</Form.Label>
        <Form.Control type="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Node JS</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>React Linking Code</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mongoose</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Design</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default Editcode