// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './screens/Home/Home.js';
import HomeNewAcc from './screens/HomeNewAcc/HomeNewAcc.js';
import ScheduleSetup1 from './screens/ScheduleSetup1/ScheduleSetup1.js';
import ScheduleSetup2 from './screens/ScheduleSetup2/ScheduleSetup2.js';
import ScheduleSetup3 from './screens/ScheduleSetup3/ScheduleSetup3.js';
import Login from './screens/Login/Login.js';
import Signup from './screens/Signup/Signup.js';
import Schedule from './screens/Schedule/Schedule.js';
import ScheduleAlt from './screens/ScheduleAlt/ScheduleAlt.js';
import TagManager from 'react-gtm-module';

function initializeAnalytics() {
  const trackingId = "UA-159187367-1";
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/');

  const tagManagerArgs = {
      gtmId: 'GTM-TRJ4Q33'
  };

  TagManager.initialize(tagManagerArgs)
}

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
}

class App extends Component {

  componentDidMount() {
    ReactGA.event({
      category: 'interactions',
      action: 'click'
    });
  }

  render() {
    initializeAnalytics();
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/home-new-acc' component={HomeNewAcc} />
          <Route exact path='/schedule-setup1' component={ScheduleSetup1} />
          <Route exact path='/schedule-setup2' component={ScheduleSetup2} />
          <Route exact path='/schedule-setup3' component={ScheduleSetup3} />
          <Route exact path='/schedule' component={Schedule} />
          <Route exact path='/schedule-alt' component={ScheduleAlt} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
