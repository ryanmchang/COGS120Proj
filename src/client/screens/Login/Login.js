import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';

export default class Login extends Component {

  componentDidMount() {
  }

  routeHome = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <p>Welcome to BodyClock</p>
        <h4>Username<input class="textbox" type="text"/></h4>
        <h4>Password<input class="textbox" type="text"/></h4>
        <a href="account-recovery" id="forgot">Trouble logging in?</a> <br/>
        <p>or</p>
        <button onClick={this.routeHome}>Login</button>
      </div>
    );
  }
}
