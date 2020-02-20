import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";



export default class Signup extends Component {
   componentDidMount() {
  }


  routeHome = () => {
    this.props.history.push('/home');
  }

  routeBack = () => {
    this.props.history.goBack();
  }


  render() {
    return (
       <div className="Signup">
        <button className="back-button" onClick={this.routeBack}>Back</button>
        <h1>Sign up for BodyClock</h1>
        <form>
          <div className="container">
          <label for="username"><b>Set Username</b></label>
           <input type="text" placeholder="Enter Username" name="username" required />

            <label for="username"><b>Set Password</b></label>
           <input type="password" placeholder="Enter Password" name="psw" required />


          </div>
        </form>
      <button className="nextStep" onClick={this.routeHome}>Create Account</button>
    </div>
    );
  };
}
