import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import Earth from "../../../../public/Earth.svg";

import data from "../../data.json";

export default class Login extends Component {
  responseFacebook(response) {
    console.log(response);
  }
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

  routeSignup = () => {
    this.props.history.push('/Signup');

    let obj = {name: "Example", age: 0, chronotype: "lion" };
    data.user.push(obj);
  }

   routeHome = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="login">
        <h1>Body Clock</h1>
        <img className="earth" src={Earth} />
        <div className="loginContent">
        <h4>Username<input className="textbox" type="text"
        onChange={this.handleUsernameChange} placeholder="Username"/></h4>
        <h4>Password<input className="textbox" type="password"
        onChange={this.handlePassChange} placeholder="Password"/></h4>
        <a onClick={this.routeSignup} >First time user?</a><br/>
        <button disabled={(!this.state.userName) || (!this.state.password)}
        onClick={this.routeHome}>LOGIN</button>
        <p>or</p>
        <FacebookLogin
          className="facebookLogin"
          appId="219745835855775"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        <br/>
        </div>
      </div>
    );
  }
}
