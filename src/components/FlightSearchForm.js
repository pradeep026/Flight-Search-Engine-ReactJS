import React, { Component } from 'react';
import './../styles/App.css';
import TextInputComponent from './TextInputComponent';
import DateInputComponent from './DateInputComponent';

const formateDate = (year, month, date) => {
  month = (month > 9) ?  month : `0${month}`;
  date = (date > 9) ?  date : `0${date}`;
  return `${year}-${month}-${date}`;
};

class FlightSearchForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      depatureCity: null,
      destinationCity: null,
      depatureDate: null,
      returnDate: null,
      passengersCount: null,
      minDateForReturnAt: null,
      minDateForDepatureAt: null
    };

    // Bind Context to `onDepatureCityChange`
    this.initializeMinDateForDepature = this.initializeMinDateForDepature.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
  }

  componentDidMount(){
    this.initializeMinDateForDepature();
  }

  onUserInputChange(name, value){
    console.log(name, value);
    this.setState(
      { [ name ]: value },
      ()=> {
        console.log(this.state);
        if(name === 'depatureDate'){
          let { depatureDate, minDateForReturnAt, minDateForDepatureAt } = this.state;
          minDateForReturnAt = this.getMinDateForReturn(depatureDate, minDateForReturnAt, minDateForDepatureAt);
          this.setState({minDateForReturnAt});
        }
      }
    );
  }



  initializeMinDateForDepature(){
    const d = new Date();
    let minDate = formateDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
    this.setState({
      minDateForDepatureAt: minDate,
      minDateForReturnAt: minDate
    });
  }

  getMinDateForReturn(depatureDate, minDateForReturnAt, minDateForDepatureAt){
    let ret = (new Date(minDateForReturnAt) < new Date(depatureDate)) ? depatureDate : minDateForDepatureAt;
    console.log("ret ", ret);
    return ret;
  }

  render() {
    return (
      <div className="search--form side-nav">
          <form>

            <TextInputComponent
              name="depatureCity"
              placeholder="From"
              label="From"
              onUserInputChange={this.onUserInputChange}
            />

            <TextInputComponent
              name="destinationCity"
              placeholder="Destination"
              label="Destination"
              onUserInputChange={this.onUserInputChange}
            />

            <DateInputComponent
              name="depatureDate"
              placeholder="Depature Date"
              label="Depature Date"
              min={this.state.minDateForDepatureAt}
              onUserInputChange={this.onUserInputChange}
            />

            <DateInputComponent
              name="returnDate"
              placeholder="Return Date"
              label="Return Date"
              min={this.state.minDateForReturnAt}
              onUserInputChange={this.onUserInputChange}
            />

            <TextInputComponent
              name="passengersCount"
              placeholder="Passengers"
              label="Passengers"
              onUserInputChange={this.onUserInputChange}
            />
            <div className="form--row">
              <input type="button" value="Search" />
            </div>
          </form>
      </div>
    );
  }
}

export default FlightSearchForm;
