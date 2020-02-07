import React, { Component } from 'react';

export default class ScheduleSetup extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>ScheduleSetup</h1>
        <form>
          What country are you going to? <br/>
          <input type="text"/> <br/>
          What's your flight number? <br/>
          <input type="text"/> <br/>
        </form>

        <button>Continue</button>
      </div>
    );
  }
}
