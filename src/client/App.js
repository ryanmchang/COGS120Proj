// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home.js';
import ScheduleSetup1 from './screens/ScheduleSetup1/ScheduleSetup1.js';
import ScheduleSetup2 from './screens/ScheduleSetup2/ScheduleSetup2.js';
import ScheduleSetup3 from './screens/ScheduleSetup3/ScheduleSetup3.js';
import Login from './screens/Login/Login.js';
import Signup from './screens/Signup/Signup.js'
import Schedule from './screens/Schedule/Schedule.js'


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
          <Route exact path='/' component={Login} />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/schedule-setup1' component={ScheduleSetup1} />
          <Route exact path='/schedule-setup2' component={ScheduleSetup2} />
          <Route exact path='/schedule-setup3' component={ScheduleSetup3} />
          <Route exact path='/Schedule' component={Schedule} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
