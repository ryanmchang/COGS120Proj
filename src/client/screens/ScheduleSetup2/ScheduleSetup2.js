import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";
import Agreement from  "../../../../public/agreement.svg";
import Info from  "../../../../public/info.svg";


export default class ScheduleSetup2 extends Component {
  constructor() {
    super();

    this.state = {
      showInfo: false,
      chronotype: "",
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


  fetchTemplate = async (chronotype) => {
    let rawResponse = await fetch('/api/form/chronotype/' + chronotype, {
      method: "POST"
    });
  }

  routeBack = () => {
    this.props.history.goBack();
  }
  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup3');
    this.fetchTemplate(this.state.chronotype);

  }

  handleChange = (event) => {
    this.setState({
      chronotype: event.target.value
    });
  }



  render() {
    return (
      <div className="setup2">
        <button className="back-button" onClick={this.routeBack}>Back</button>

        <form>What's your Chronotype?
          <img className="info" id="infoButton" src={Info} onClick={this.showInfo}
          align="right"/><br/>
          {
            this.state.showInfo
              ? (
                <div>
                  <p className="dropdown">A person's chronotype is the propensity for the individual
                  to sleep at a particular time during a 24-hour period. <br/><br/>
                  Don't know what your chronotype is?</p>
                  <a href="https://thepowerofwhenquiz.com/" target="_blank" id="info" >Check out your chronotype here</a>
                  <br/><br/>
                </div>
              )
              : (
                null
              )
          }
          <input
            type="radio"
            name="chronotype"
            value="Dolphin"
            onChange={this.handleChange}
          /> Dolphin<br/>
          <input
            type="radio"
            name="chronotype"
            value="Lion"
            onChange={this.handleChange}
          /> Lion<br/>
          <input
            type="radio"
            name="chronotype"
            value="Bear"
            onChange={this.handleChange}
          /> Bear<br/>
          <input
            type="radio"
            name="chronotype"
            value="Wolf"
            onChange={this.handleChange}
          /> Wolf<br/>
        </form>

        <form>
          What time do you usually fall asleep? <br/><br/>
          <div>
            <input type="time" required />
            <br/><br/>
          </div>
          What time do you normally wake up? <br/>
          <input type="time" required />
        </form><br/><br/>
        <img className="agreement" src={Agreement} />
        <button className="nextStep" onClick={this.routeScheduleSetup}>Continue</button>

      </div>
    );
  }
}
