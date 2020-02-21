import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";
import Agreement from  "../../../../public/agreement.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ScheduleSetup1 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  state = {
    startDate: new Date(),
    flightNum: ''
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleFlightChange = e => {
    this.setState({
      flightNum: e.target.value
    });
  };

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
        <button className="back-button" onClick={this.routeBack}>Back</button>
        <h1>Tell us about yourself</h1>
        <form>So, <br/> Your Departure Date <br/>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          <br/> What's your flight number? <br/>
          <input name="flightNum" default="Enter your flight number"
          value={this.state.flightNum} type="text" onChange={this.handleFlightChange}
          placeholder="Enter Flight Number Here"/>

        </form>
        <img className="agreement" src={Agreement} />

        <button className="nextStep" disabled={!this.state.flightNum}
        onClick={this.routeScheduleSetup}>Continue</button>
      </div>
    );
  }
}
