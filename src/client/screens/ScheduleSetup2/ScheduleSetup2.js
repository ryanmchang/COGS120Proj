import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";
import Agreement from  "../../../../public/agreement.svg";
import Info from  "../../../../public/info.svg";


export default class ScheduleSetup2 extends Component {
  constructor() {
    super();

    this.state = {
      showInfo: false,
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
  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup3');
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
        <div className="options">
          <input  type="radio" name="gender" /> Dolphin, a light sleeper<br/>
          <input type="radio" name="gender" /> Lion, a morning person<br/>
          <input type="radio" name="gender" /> Bear, in between<br/>
          <input type="radio" name="gender" /> Wolf, a night person <br/>
        </div>
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
