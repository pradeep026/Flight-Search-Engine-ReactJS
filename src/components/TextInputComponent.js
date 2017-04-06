import React, { Component } from 'react';

class TextInputComponent extends Component {

  constructor(props){
    super(props);
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
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.onUserInputChange} />
      </div>
    );
  }
}

export default TextInputComponent;
