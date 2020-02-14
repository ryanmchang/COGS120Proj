import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
//import { Route, Link} from 'react-router-dom';

export default class Login extends Component {
  responseFacebook(response) {
    console.log(response);
  }
  componentDidMount() {
  }

  routeHome = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="login">
        <h1>Body Clock</h1>
        <img class="earth" src="/public/Earth.svg" />
        <div className="loginContent">
        <h4>Username<input class="textbox" type="text"/></h4>
        <h4>Password<input class="textbox" type="text"/></h4>
        <a href="account-recovery" id="forgot">Trouble logging in?</a><br/>
        <button onClick={this.routeHome}>LOGIN</button>
        <p>or</p>
        <FacebookLogin
          className="facebookLogin"
          appId="219745835855775"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        /><br/>
        </div>
      </div>
    );
  }
}
