import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";
import Agreement from  "../../../../public/agreement.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ScheduleSetup1 extends Component {

  componentDidMount() {
  }

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
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
          <input type="text"/> <br/>
        </form>
        <img className="agreement" src={Agreement} />

        <button className="nextStep" onClick={this.routeScheduleSetup}>Continue</button>
      </div>
    );
  }
}
