import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";
import { render } from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
{
// import Tab from "../../components/Tab/Tab.js";
// require('./styles.css');
}


export default class Schedule extends Component {

  componentDidMount() {
  }

  routeBack = () => {
    this.props.history.goBack();
  }
  createMorningTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 12; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 2; j++) {
        if (j < 1) {
          if (i === 0) {
            children.push(<td>{`12:00 A.M.`}</td>)
          }
          else {
            children.push(<td>{`${i}:00 A.M.`}</td>)
          }
        }
        else {
          children.push(<td>{`To-Do ${i+1}`}</td>)
        }
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }

  createNightTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 11; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 2; j++) {
        if (j < 1) {
          if (i === 0) {
            children.push(<td>{`12:00 P.M.`}</td>)
          }
          else {
            children.push(<td>{`${i + 1}:00 P.M.`}</td>)
          }
        }
        else {
          children.push(<td>{`To-Do ${i+1}`}</td>)
        }
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
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
            data.schedule1.map( (schedule) =>
              <div>
                <h1>{schedule.activity}</h1>
                <p className="time">{schedule.Time}</p>
                <p>{schedule.description}</p>
              </div>
            )
          }
          {/*<table>
            {this.createMorningTable()}
          </table>*/}
        </TabPanel>
        <TabPanel>
          {/*<table>
            {this.createNightTable()}
          </table>*/}
        </TabPanel>
      </Tabs>
    );
    return (
      <div className="schedule">
        <BackButton handleClick={this.routeBack}/>
        <h3>These tips help you fight against JetLag</h3>
        {displayPosts}

      </div>
    );
  }
}
