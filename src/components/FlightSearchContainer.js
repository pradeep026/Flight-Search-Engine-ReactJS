import React, { Component } from 'react';
import FlightSearchForm from './FlightSearchForm';
import FlightSearchFilter from './FlightSearchFilter';

class FlightSearchContainer extends Component {
  render() {
    return (
      <div className="search--form-container side-nav">
        <FlightSearchForm />
        <FlightSearchFilter />
      </div>
    );
  }
}

export default FlightSearchContainer;
