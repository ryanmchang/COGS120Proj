import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";

export default class ScheduleSetup2 extends Component {

  componentDidMount() {
  }

  routeBack = () => {
    this.props.history.goBack();
  }
  routeSchedule = () => {
    this.props.history.push('/schedule');
  }

  render() {
    return (
      <div className="setup2">
        <button className="back-button" onClick={this.routeBack}> BACK </button>
        <h1>ScheduleSetup2</h1>
        <form>What's your Chronotype?<br/>
          <input type="radio" name="gender" /> Dolphin<br/>
          <input type="radio" name="gender" /> Lion<br/>
          <input type="radio" name="gender" /> Bear<br/>
          <input type="radio" name="gender" /> Wolf<br/>
        </form>

        <form>
          What time do you usually sleep? <br/>
          <input type="text"/> <br/>
          What time do you usually wake up? <br/>
          <input type="text"/> <br/>
        </form>

        <button onClick={this.routeSchedule}>Continue</button>
      </div>
    );
  }
}
