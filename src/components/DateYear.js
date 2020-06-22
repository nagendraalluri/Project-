import React, {Component} from 'react';
import API from '../services/dateAPI';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';

export default class DateYear extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false
    }
  }

	handleClickButton() {
		// handle button click event and state changes here
	}

	render() {
        // complete the necessary application logic here
		return (
  <div className='container-fluid'>
    <div>
      <center>
        <h2>Date/Year Server</h2>
      </center>
    </div>
    <div className='text-center page-title'>
      <DateYearClick />
    </div>
  </div>
);

	}
}

