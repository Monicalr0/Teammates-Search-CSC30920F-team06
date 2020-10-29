import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'



class LoginForm extends React.Component{
    constructor() {
       super()
       this.state={
        userEmail:"",
        userPass:"",
        
       
    }
    this.handleChangeServer=this.handleChangeServer.bind(this);
    

    }
    handleChangeServer(event){
        const{name,value}=event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
        <div className="login"  style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
             <InputGroup className="mb-3">
                  <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={this.state.userEmail} name="userEmail" type="email" placeholder="Enter email" onChange={this.handleChangeServer} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
      
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={this.state.userPass} name="userPass" type="password" placeholder="Password" onChange={this.handleChangeServer}/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
              {'     '}
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            </InputGroup>
        </div >
        )}

}

export default LoginForm