import React, { Component } from 'react';

export default class ScheduleSetup1 extends Component {

  componentDidMount() {
  }


  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup2');
  }

  render() {
    return (
      <div className="setup1">
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
