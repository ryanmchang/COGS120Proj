import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";



export default class Signup extends Component {
   componentDidMount() {
  }

  state = {
    username: '',
    password: ''
  };

  handleUsernameChange = e => {
    this.setState({
      userName: e.target.value
    });
  };

  handlePassChange = e => {
    this.setState({
      password: e.target.value
    });
  };

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
           <input type="text" name="username" required
           onChange={this.handleUsernameChange} placeholder="Username" />

            <label for="username"><b>Set Password</b></label>
           <input type="password" name="psw" required
           onChange={this.handlePassChange} placeholder="Password" />


          </div>
        </form>
      <button className="nextStep" disabled={(!this.state.userName) || (!this.state.password)}
      onClick={this.routeHome}>Create Account</button>
    </div>
    );
  };
}
