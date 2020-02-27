import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";
import { render } from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class Schedule extends Component {

  componentDidMount() {
  }

  routeBack = () => {
    this.props.history.goBack();
  }

  render() {
    const displayPosts = (
      <Tabs>
        <TabList>
          <Tab>Morning</Tab>
          <Tab>Night</Tab>
        </TabList>

        <TabPanel>
          {
            data.day_schedules[4].map( (schedule) =>
              <div key={schedule.Time}>
                <h1>{schedule.activity}</h1>
                <p className="time">{schedule.Time}</p>
                <p>{schedule.description}</p>
              </div>
            )
          }
        </TabPanel>
        <TabPanel>
          {
            data.night_schedules[4].map( (schedule) =>
              <div key={schedule.Time}>
                <h1>{schedule.activity}</h1>
                <p className="time">{schedule.Time}</p>
                <p>{schedule.description}</p>
              </div>
            )
          }
        </TabPanel>
      </Tabs>
    );
    return (
      <div className="schedule">
        <BackButton handleClick={this.routeBack}/>
        <h3>These tips help you fight Jet Lag</h3>
        {displayPosts}

      </div>
    );
  }
}
