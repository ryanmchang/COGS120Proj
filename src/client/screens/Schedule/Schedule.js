import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../tempData.json"; // <-------------------temp data!!!!!
import BackButton from "../../components/BackButton/BackButton.js";
import { render } from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    console.log(data.form.chronotype);
    console.log(data.form.drug);

    if (data.form.chronotype == "Bear" || data.form.chronotype === "Wolf") {
      if (data.form.drug === "Caffeine") {
        this.setState({index: 0});
      } else if (data.form.drug === "Melatonin" || data.form.drug === "Marijuana") {
        this.setState({index: 1});
      } else if (data.form.drug === "None") {
        this.setState({index: 2});
      }
    }
    else if (data.form.chronotype == "Lion" || data.form.chronotype === "Dolphin") {
      if (data.form.drug === "Caffeine") {
        this.setState({index: 3});
      } else if (data.form.drug === "Melatonin" || data.form.drug === "Marijuana") {
        this.setState({index: 4});
        console.log("TIHS is dolphin marihuana");
      } else if (data.form.drug === "None") {
        this.setState({index: 5});
      }
    }
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
            data.day_schedules[this.state.index].map( (schedule) =>
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
            data.night_schedules[this.state.index].map( (schedule) =>
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
