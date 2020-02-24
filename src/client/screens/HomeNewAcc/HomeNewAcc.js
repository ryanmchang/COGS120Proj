import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";
import Flight from  "../../../../public/Flight.svg";
import Signup from "../../screens/Signup/Signup.js";

export default class HomeNewAcc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }

  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    this.setState ({
      date:
        month + '/' + date + '/' + year,
    });
  }

  routeScheduleSetup = () => {
    this.props.history.push('/schedule-setup1');
  }

  routeBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="home">
        <BackButton handleClick={this.routeBack}/>
        <div className= "welcome">
          <p>{this.state.date}</p>
          <h1>Welcome {data.user[0].name}</h1>
        </div>
        <img className="flight" onClick={this.routeScheduleSetup} src={Flight} />
        <button className="addTrip" onClick={this.routeScheduleSetup}>Add a Trip</button>
      </div>
    );
  }
}
