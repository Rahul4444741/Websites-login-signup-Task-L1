import React, { Component } from "react";
import firebase from "firebase";

import { TextInputField, Button } from "evergreen-ui";

export default class SigninPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };

    this.handleSignIn = this.handleSignIn.bind(this);
  }
  
  componentDidMount() {
  }

  handleSignIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      let errorMessage = error.message;
      this.setState({ error: errorMessage });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Sign In</h1>
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
            placeholder="Enter your password"
          />
          <Button onClick={this.handleSignIn}>Sign In</Button>
        </div>
      </div>
    );
  }
}
