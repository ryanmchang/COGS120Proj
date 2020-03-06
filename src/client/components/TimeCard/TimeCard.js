import React, { Component } from 'react';
import data from "../../data.json";
import ReactGA from 'react-ga';

export default class TimeCard extends Component {

  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    }

    this.showInfo = this.showInfo.bind(this);
  }

  showInfo(event) {
    event.preventDefault();
    if (this.state.showInfo) {
      this.setState({
        showInfo: false
      });
    }
    else {
      this.setState({
        showInfo: true
      });
    }

      ReactGA.event({
      category: 'toggle in alt',
      action: 'how many times people click on each card'
    });
    // alert("toggle")
  }
  render() {
    return (
      <div className="timeCard">
        <form className="wrap" onClick={this.showInfo}>
          <h1 align="center"><a>{this.props.time}</a></h1>
          {
            this.state.showInfo
              ? (
                <div>
                  <h2 align="center" className="dropdown">{this.props.activity}</h2>
                  <p align="center" lassName="dropdown">{this.props.description}</p>
                  <br/><br/>
                </div>
              )
              : (
                null
              )
          }
        </form>
      </div>
    );
  }
}
