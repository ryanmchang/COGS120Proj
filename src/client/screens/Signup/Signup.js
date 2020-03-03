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
      password: '',
      validateName: true,
      validateUser: true,
      validatePass: true
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
    this.state.username = e.target.value;
    this.setState({
      userName: e.target.value
    });

  };

  handlePassChange = e => {
    this.state.password = e.target.value;
    this.setState({
      password: e.target.value
    });
  };

  handleBlurName = e => {
    this.setState({
      validateName: this.state.name.length > 0
    });
    console.log(this.state.validateName);
    console.log(this.state.name);
  }

  handleBlurUser = e => {
    this.setState({
      validateUser: this.state.username.length > 0
    });
    console.log(this.state.validateUser);
    console.log(this.state.username);
  }

  handleBlurPass = e => {
    this.setState({
      validatePass: this.state.password.length > 0
    });
    console.log(this.state.validatePass);
  }

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
            <input type="text" name="name" onBlur={this.handleBlurName}
            className={this.state.validateName ? "textbox" : "error"}
            onChange={this.handleNameChange} placeholder="Full Name" />

            <label htmlFor="username"><b>Username</b></label>
            <input type="text" name="username" onBlur={this.handleBlurUser}
              className={this.state.validateUser ? "textbox" : "error"}
              onChange={this.handleUsernameChange} placeholder="Username" />

            <label htmlFor="pass"><b>Password</b></label>
            <input type="password" name="psw" onBlur={this.handleBlurPass}
              className={this.state.validatePass ? "textbox" : "error"}
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
