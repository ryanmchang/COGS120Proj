import React, { Component } from 'react';
import BackButton from "../../components/BackButton/BackButton.js";
import Agreement from  "../../../../public/agreement.svg";


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

        <form>Just a few more questions... <br/><br/>
          <small>Do you take melatonin?</small>
          <input  type="radio" align="right"/>yes
          <input type="radio" className="radio"/>no<br/>
          <small>Do you use caffeine?</small>
          <input  type="radio" className="radio"/>yes
          <input type="radio" className="radio"/>no<br/>
          <small>Do you use marijuana?</small>
          <input  type="radio" className="radio"/>yes
          <input type="radio" className="radio"/>no<br/>
        </form>
        <form> Let us know if you have any sleep disorders <br/>
          <input type="text" placeholder="Enter text here"/>
        </form>
      <img className="agreement" src={Agreement} />

        <button className="nextStep" onClick={this.routeSchedule}>Finish</button>

      </div>
    );
  }
}
