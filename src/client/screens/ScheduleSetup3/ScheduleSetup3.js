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

        <form>Mark what drugs you use <br/>
          <input  type="radio"/>Melatonin<br/>
          <input  type="radio"/>Caffeine<br/>
          <input  type="radio"/>Marijuana
        </form>
        <form> Let us know if you have any sleep disorders <br/>
          <input type="text" placeholder="Enter text here"/>
        </form> <br/>
      <img className="agreement" src={Agreement} />

        <button className="nextStep" onClick={this.routeSchedule}>Finish</button>

      </div>
    );
  }
}
