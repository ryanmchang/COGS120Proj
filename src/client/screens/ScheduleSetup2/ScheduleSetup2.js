import React, { Component } from 'react';

export default class ScheduleSetup2 extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="setup2">
        <h1>ScheduleSetup2</h1>
        <form>What's your Chronotype?<br/>
          <input type="radio" name="gender" /> Dolphin<br/>
          <input type="radio" name="gender" /> Lion<br/>
          <input type="radio" name="gender" /> Bear<br/>
          <input type="radio" name="gender" /> Wolf<br/>
        </form>

        <form>
          What time do you usually sleep? <br/>
          <input type="text"/> <br/>
          What time do you usually wake up? <br/>
          <input type="text"/> <br/>
        </form>


        <button>Finish</button>
      </div>
    );
  }
}
