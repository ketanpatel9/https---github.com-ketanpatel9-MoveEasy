import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../SignUp.css';

function SignUp() {
  return (
    <div className="base">
      <div className='su-first'>
      <h1>Sign Up</h1>
      </div>
      <div className="container">
        
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" />
          </Form.Group>

          <Form.Group controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Enter country" />
          </Form.Group>

          <Form.Group controlId="formZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control type="number" placeholder="Enter zipcode" />
          </Form.Group>

          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter state" />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
