import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";


export default class Home extends Component {

  componentDidMount() {
  }

  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup1');
  }

  routeBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="home">
        <BackButton handleClick={this.routeBack}/>
        <h1>Home</h1>
        <p>Time of the day placeholder</p>
        <h1>Welcome back, <br/> {data.user.name}</h1>
        <button onClick={this.routeScheduleSetup}>Continue</button>
      </div>
    );
  }
}
