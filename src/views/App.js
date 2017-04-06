import React, { Component } from 'react';
import SearchHeader from './../components/SearchHeader';
import FlightSearchContainer from './../components/FlightSearchContainer';
import SearchResultView from './../components/SearchResultView';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchHeader />
        <FlightSearchContainer />
        <SearchResultView />
      </div>
    );
  }
}

export default App;
