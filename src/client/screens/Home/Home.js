import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json";
import BackButton from "../../components/BackButton/BackButton.js";
import Flight from  "../../../../public/Flight.svg";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }
  componentDidMount() {
    //diy
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year


  const d = new Date();
  var m =  monthNames[d.getMonth()]


    this.setState ({
      date:
         m + ' ' + date + ' ' + year,
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
          <h4>{this.state.date}</h4>
          <h1>Welcome back, <br/> {data.user[0].name}</h1>
        </div>
        <img className="flight" onClick={this.routeScheduleSetup} src={Flight} />
        <button className="addTrip" onClick={this.routeScheduleSetup}>Add a Trip</button>
      </div>
    );
  }
}
