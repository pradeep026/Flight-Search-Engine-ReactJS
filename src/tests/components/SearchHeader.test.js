import React from 'react';
import ReactDOM from 'react-dom';
import SearchHeader from './../../components/SearchHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchHeader />, div);
});
