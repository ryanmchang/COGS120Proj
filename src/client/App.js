import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home.js';
import ScheduleSetup1 from './screens/ScheduleSetup1/ScheduleSetup1.js';
import ScheduleSetup2 from './screens/ScheduleSetup2/ScheduleSetup2.js';

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
}

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/schedule-setup1' component={ScheduleSetup1} />
          <Route exact path='/schedule-setup2' component={ScheduleSetup2} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
