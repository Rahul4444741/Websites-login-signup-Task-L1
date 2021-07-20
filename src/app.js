import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import firebase from "firebase";

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import WelcomePage from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";

import "./style.css";
 const config = {
    apiKey: "AIzaSyA188NpSv2ULDUNO6CLVAgwLa1p3tfrFWE",
    authDomain: "taskl1.firebaseapp.com",
    databaseURL: "https://taskl1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "taskl1",
    storageBucket: "taskl1.appspot.com",
    messagingSenderId: "364023254346",
    appId: "1:364023254346:web:99099aac184679abc605b3",
    measurementId: "G-6GB26D0TBH"
  };


firebase.initializeApp(config);


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/signup" component={SignupPage}/>
    <Route exact path="/signin" component={SigninPage}/>
    <Route exact path="/welcome" component={WelcomePage}/>
    <Route exact path="/dashboard" component={DashboardPage}/>
  </BrowserRouter>
  , document.getElementById("app"));