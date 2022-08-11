import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Home() {

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
    <div className="">
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" />
        <Card.Body>
          <Card.Title>MERN</Card.Title>
          <Card.Text>
            Create A MERN Project with snippets
          </Card.Text>
         
          <Nav.Link as={Link} to="/codegen"> Go</Nav.Link>

        </Card.Body>
      </Card> */}

      {/* <br />
      <h1>CodeList</h1>
      <br />
      <Row>
        <Col>
          <Card style={{ width: '35vw' }}>
            <Card.Body>
              <Card.Title>Node</Card.Title>

              <pre>
                <code>{`
       

          `}
                </code>
              </pre>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '35vw' }}>
            <Card.Body>
              <Card.Title>React</Card.Title>

              <pre>
                <code>{`
        class GFG
        {
            // Program begins with a call to main()
            // Print "Hello, World" to the terminal window
            public static void main(String args[])
            {
                System.out.println("Hello, World");
            }
        }

          `}
                </code>
              </pre>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <Card style={{ width: '35vw' }}>
            <Card.Body>
              <Card.Title>Mongoose</Card.Title>

              <pre>
                <code>{`
        class GFG
        {
            // Program begins with a call to main()
            // Print "Hello, World" to the terminal window
            public static void main(String args[])
            {
                System.out.println("Hello, World");
            }
        }

          `}
                </code>
              </pre>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '35vw' }}>
            <Card.Body>
              <Card.Title>Design</Card.Title>

              <pre>
                <code>{`
        class GFG
        {
            // Program begins with a call to main()
            // Print "Hello, World" to the terminal window
            public static void main(String args[])
            {
                System.out.println("Hello, World");
            }
        }

          `}
                </code>
              </pre>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br /> */}
      Mapping
      {
        codebook.map((val, key) => {
          return <div key={key}>
            <pre>
              <code>{val.name}</code>
              <br />
              <code>{val.node}</code>
              <br />
              <code>{val.react}</code>
              <br />
              <code>{val.mongoose}</code>
              <br />
              <code>{val.design}</code>
              <br />
              <br />
            </pre>
          </div>
        })
      }

    </div>
  );
}

export default Home