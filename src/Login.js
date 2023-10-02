
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { API } from './Redux/Slice';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Validation from './Validation';

function Login() {
    const dispatch=useDispatch()
const [users,setUsers]=useState({
    Name:"",
    Email:"",
    Password:""
})
const [error,setError]=useState({})


    const Handle=(e)=>{
      setUsers({...users,[e.target.name]:e.target.value})
      console.log(users)
    }
    const Submit =(e)=>{
        e.preventDefault()
        if((users.Name==='') || (users.Email==='')|| (users.Password===''))
        {
          console.log("plz fill all field")
        }
        else{
          console.log("sucessfull")
        }
        dispatch(API(users))
        setError(Validation(users))

    }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Brand Bhush</h2>
                  <p className=" mb-5">Please Register!</p>
                  <div className="mb-3">
                    <Form onSubmit={Submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="Name" onChange={Handle} value={users.Name} />
                        {error.Name&&<span style={{color:'red'}}>{error.Name}</span>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="Email" onChange={Handle} value={users.Email}   />
                        {error.Email&&<span style={{color:'red'}}>{error.Email}</span>}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="Password" onChange={Handle} value={users.Password}   />
                        {error.Password&&<span style={{color:'red'}}>{error.Password}</span>}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                       
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                         Register
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                     
                        <a href="{''}" className="text-primary fw-bold">
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login