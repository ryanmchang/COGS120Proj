import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";

export default class ScheduleSetup1 extends Component {

  componentDidMount() {
  }


  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup2');
  }

  routeBack = () => {
    console.log("Setup1 trying to go back");
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="setup1">
        <button className="back-button" onClick={this.routeBack}> BACK </button>
        <h1>ScheduleSetup1</h1>
        <form>What country are you going to? <br/>
          <input type="text"/> <br/> What's your flight number? <br/>
          <input type="text"/> <br/>
        </form>

        <button onClick={this.routeScheduleSetup}>Continue</button>
      </div>
    );
  }
}
