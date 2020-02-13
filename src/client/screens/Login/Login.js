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
      <div className="home">
        <h1>Login</h1>
        <p>Time of the day placeholder</p>
        <h1>Welcome back, <br/>Bacon</h1>
        <button onClick={this.routeHome}>Continue</button>
      </div>
    );
  }
}
