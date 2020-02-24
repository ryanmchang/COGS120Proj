import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";



export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      password: ''
    };
  }
   componentDidMount() {
  }

  handleNameChange = e => {
    this.state.name = e.target.value;
    this.setState({
      name: e.target.value
    });
    console.log('name: ', this.state.name);
    data.user[0].name = this.state.name;
    console.log('value: ', data.user[0].name);
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
    this.props.history.push('/home-new-acc');
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
            <label htmlFor="name"><b>First Name</b></label>
            <input type="text" name="name"
            onChange={this.handleNameChange} placeholder="Full Name"
            required />

            <label htmlFor="username"><b>Username</b></label>
            <input type="text" name="username" required
           onChange={this.handleUsernameChange} placeholder="Username"
           required />

            <label htmlFor="pass"><b>Password</b></label>
            <input type="password" name="psw" required
           onChange={this.handlePassChange} placeholder="Password" />

          </div>
        </form>
      <button className="nextStep"
      disabled={(!this.state.name) || (!this.state.userName) || (!this.state.password)}
      onClick={this.routeHome}>Create Account</button>
    </div>
    );
  };
}
