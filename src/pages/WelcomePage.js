import React, { Component } from 'react';
import { TextInputField, Button } from 'evergreen-ui';
import firebase from "firebase";

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    const form = document.getElementById("basic-details");
    const date_of_birth = form.elements[0].value;
    const place_of_birth = form.elements[1].value;

    const data = {
      dob: date_of_birth,
      place: place_of_birth
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.database();
        db.ref("userdetail_" + user.uid).set(data).then(() =>{
          window.location.href = "/dashboard";
        });

      } else {
        alert("User is not signed in.");
        window.location.href = "/signin";
      }
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <h1>Basic details</h1>
        <div className="mid">
        <form id="basic-details">
          <TextInputField
            label="Date of Birth"
            type="date"
            id="dob"
            inputWidth={300} 
          />
          <TextInputField
            label="Place of Birth"
            type="text"
            id="place"
            inputWidth={300}
            placeholder="Name of city" 
          />
        </form>
        <Button onClick={this.handleSubmit}>Submit Details</Button>
        </div>
      </div>
    );
  }
}
