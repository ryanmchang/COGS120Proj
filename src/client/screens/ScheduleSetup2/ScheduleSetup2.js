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
  routeSchedule = () => {
    this.props.history.push('/schedule');
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
              <div className="info">
                <p className="dropdown">A person's chronotype is the propensity for the individual
                to sleep at a particular time during a 24-hour period. <br/><br/>
                Don't know what your chronotype is?</p>
                <a href="https://thepowerofwhenquiz.com/" id="info" >Check out your chronotype here</a>
                <br/><br/>
              </div>
            )
            : (
              null
            )
        }
          <input  type="radio" name="gender" /> Dolphin<br/>
          <input type="radio" name="gender" /> Lion<br/>
          <input type="radio" name="gender" /> Bear<br/>
          <input type="radio" name="gender" /> Wolf<br/>
        </form>

        <form>
          What time do you usually fall asleep? <br/><br/>
          <div>
            <input type="time" required />
            <br/><br/>
          </div>
          What time do you normally wake up? <br/>
          <input type="text"/> <br/>
        </form>
      <img className="agreement" src={Agreement} />

        <button className="nextStep" onClick={this.routeSchedule}>Finish</button>

      </div>
    );
  }
}
