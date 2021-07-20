import { Button } from 'evergreen-ui';
import React, { Component } from 'react';
import firebase from 'firebase';

export default class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "...",
      date_of_birth: "...",
      place_of_birth: "..."
    };
  }
  
  handleSignOut() {
    firebase.auth().signOut().then(() => {
      alert("User Signed Out");
      window.location.href = "/signin";
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dbRef.child("userdetail_" + user.uid).get().then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            this.setState( {
              email: user.email, 
              date_of_birth: data.dob,
              place_of_birth: data.place
            });
          } else {
            console.log("No data available.");
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{`Welcome, ${this.state.email}`}</h1>
        <div className="mid">
          <h3>{`DOB: ${this.state.date_of_birth}`}</h3>
          <h3>{`Place Of Birth: ${this.state.place_of_birth}`}</h3>
        </div>
        <Button onClick={this.handleSignOut}>Sign Out</Button>  
      </div>
    );
  }
}
