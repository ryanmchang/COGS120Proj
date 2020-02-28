import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";
import Agreement from  "../../../../public/agreement.svg";


export default class ScheduleSetup2 extends Component {
  constructor() {
    super();

    this.state = {
      showInfo: false,
      drug: ""
    }

    this.showInfo = this.showInfo.bind(this);
  }

  showInfo(event) {
    event.preventDefault();
    if (this.state.showInfo) {
      this.setState({
        showInfo: false,
      });
    }
    else {
      this.setState({
        showInfo: true,
      });
    }
  }

  componentDidMount() {
  }

  routeBack = () => {
    this.props.history.goBack();
  }
  routeSchedule = () => {
    this.props.history.push('/schedule');
    this.fetchTemplate(this.state.drug);
  }
  routeScheduleAlt = () => {
    this.props.history.push('/schedule-alt');
    this.fetchTemplate(this.state.drug);
  }
  handleChange = (event) => {
    this.setState({
      drug: event.target.value
    });
  }

  fetchTemplate = async (drug) => {
    let rawResponse = await fetch('/api/form/drug/' + drug, {
      method: "POST"
    });
  }

  render() {
    return (
      <div className="setup2">
        <button className="back-button" onClick={this.routeBack}>Back</button>

        <form>Mark what drugs you use <br/>
          <input
            type="radio"
            name="drug"
            value="Melatonin"
            onChange={this.handleChange}
          />Melatonin<br/>
          <input
            type="radio"
            name="drug"
            value="Caffeine"
            onChange={this.handleChange}
          />Caffeine<br/>
          <input
            type="radio"
            name="drug"
            value="Marijuana"
            onChange={this.handleChange}
          />Marijuana<br/>
          <input
            type="radio"
            name="drug"
            value="None"
            onChange={this.handleChange}
          />None
        </form>
        <form> Let us know if you have any sleep disorders <br/>
          <input type="text" placeholder="Skip me if you want"/>
        </form> <br/>
      <img className="agreement" src={Agreement} />

        <button className="nextStep" onClick={this.routeSchedule}>Finish</button>

      </div>
    );
  }
}
