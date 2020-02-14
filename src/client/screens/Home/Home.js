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
        <div className= "welcome">
        <p>Feb 21, 2020</p>
        <h1>Welcome back, <br/> {data.user.name}</h1>
        </div>
        <img class="flight" onClick={this.routeScheduleSetup} src="/public/Flight.svg" />
        <button className="addTrip" onClick={this.routeScheduleSetup}>Add a Trip</button>
      </div>
    );
  }
}
