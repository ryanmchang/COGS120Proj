import React, { Component } from 'react';
import data from "../../data.json";

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
  }
  render() {
    return (
      <div className="timeCard">
        <form>
          <label onClick={this.showInfo}>{this.props.time}
          </label>
        </form>
      </div>
    );
  }
}
