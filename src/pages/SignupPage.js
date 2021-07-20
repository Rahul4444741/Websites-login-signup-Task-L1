import React, { Component } from 'react';
import firebase from 'firebase';

import { TextInputField, Button } from 'evergreen-ui';

export default class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
  }
  
  handleSignUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      window.location.href = "/welcome";
    })
    .catch((error) => {
      let errorMessage = error.message;
      this.setState({ error: errorMessage });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Sign Up</h1>
        <div className="mid">
          <p style={{ color: "red" }}>{this.state.error}</p>
          <TextInputField
            label="Email"
            type="email"
            id="email"
            inputWidth={300}
            placeholder="Enter your email" 
          />
          <TextInputField 
            label="Password"
            type="password"
            id="password"
            inputWidth={300}
            placeholder="Create your password"
            hint="Password must be min. of 6 chars." 
          />
          <Button onClick={this.handleSignUp}>Sign Up</Button>
        </div>
      </div>
    );
  }
}
