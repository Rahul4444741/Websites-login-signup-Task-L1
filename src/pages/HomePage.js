import React, { Component } from "react";
import { Button } from "evergreen-ui";

export default class HomePage extends Component {
  gotoSignin() {
    window.location.href = "/signin";
  }

  gotoSignUp() {
    window.location.href = "/signup";
  }

  render() {
    return (
      <div className="container">
        <h1>Firebase Task L1.1</h1>
        <p className="home-p">To continue, click Sign Up or Sign In.</p>
        <div className="home-btns">
          <Button onClick={this.gotoSignUp}>Sign Up</Button>
          <Button onClick={this.gotoSignin}>Sign In</Button>
        </div>
      </div>
    );
  }
}
