import React from 'react';
import ReactDOM from 'react-dom';
import FlightSearchForm from './../../components/FlightSearchForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FlightSearchForm />, div);
});
