import React, { Component } from 'react';

class DateInputComponent extends Component {

  constructor(props){
    super(props);
    console.log("this.props ", props);
    this.onUserInputChange = this.onUserInputChange.bind(this);
  }

  onUserInputChange(e){
    this.props.onUserInputChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="form--row">
        <label> {this.props.label} </label>
        <input
          type="date"
          name={this.props.name}
          placeholder={this.props.placeholder}
          min={this.props.min}
          onChange={this.onUserInputChange} />
      </div>
    );
  }
}

export default DateInputComponent;
