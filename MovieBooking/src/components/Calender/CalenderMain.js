import React, { Component , useState } from 'react';
import CalendarInput from './Calender';
import './Calender.css';
import { setBookingDate } from '../../redux/actions';
import { connect } from "react-redux";

const CalenderMain =(props)=> {

  const [bookingDate, setBookingDate] = useState('')


  const dateChanged=(date)=> {
    setBookingDate(date)
    props.setBookingDate(date)
  }

    return (
      <div className="calender-class-container">
        <h2>Select Date</h2>
        <CalendarInput onDateChanged={dateChanged}/>
        <h4>{bookingDate}</h4>
      </div>
      );
  }


  const mapDispatchToProps = {
    setBookingDate: setBookingDate,
  }
  
  export default connect(null, mapDispatchToProps)(CalenderMain);
  

