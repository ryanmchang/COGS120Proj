import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


export default class BackButton extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  routeBack = () => {
    console.log("BACK!");
    this.props.history.goBack();
  }

  render() {
    return (
      <button className="btn draw-border" onClick={this.props.handleClick}> Back </button>
    );
  }
}
