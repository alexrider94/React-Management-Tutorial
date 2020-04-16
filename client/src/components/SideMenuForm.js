import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { SignUpPage } from '../pages';

class SideMenuForm extends React.Component {

  state = {
    user: ""
  }

  signUp() {
    return (
      <Route path="/signup" component={SignUpPage}></Route>
    );
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
      <Form autoComplete="off">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className='sideMenu-button'>
          <Link to="/signup">
            <Button variant="primary" onClick={this.signUp}>
              Sign Up
              </Button>
          </Link>
          <Button variant="primary">
            Sign In
            </Button>
        </div>
      </Form>
    );
  }
}

export default SideMenuForm;
