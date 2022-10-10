import React from "react";
import Form from 'react-bootstrap/Form';
export default function Login() {

    return (
       <><Form>
            <div className="login-container">
                <h1 className="login-title">Login To your Account</h1>
                <Form.Group className="login-input " >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="login-input" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="login-input">
                    Forgot your password? 
                </Form.Text>
                <div className="container-button-login">
                <div className="button-login">
                <h5>Login</h5>
                </div>
                </div>
            </div>
          
        </Form>
            <p><span>or sign in</span></p>

            </>
       
	);  
}