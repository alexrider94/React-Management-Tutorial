import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SideMenuForm extends React.Component {

  state = {
    user: ""
  }

  componentDidMount() {
    this.callAPI()
      .then(res => this.setState({ user: res }))
  }

  callAPI = async () => {
    const response = await fetch('/api/user');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className='sideMenu-button'>
          <Button variant="primary">
            Sign Up
          </Button>
          <Button variant="primary">
            Sign In
          </Button>
        </div>
      </Form>
    );
  }
}

export default SideMenuForm;
