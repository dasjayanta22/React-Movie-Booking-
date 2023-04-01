import React , { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { setBookingTimeAndHall } from '../../redux/actions';
import { connect } from "react-redux";
import { useState } from 'react'
import './showTiming.css';


const  ShowTiming =(props)=> {

    const showTimingAndHallData =  [
        {
          "cinemaHall": "RDx Cinemas",
          "showTimings": ["10:00AM", "11:45AM", "02:45 PM", "05:30 PM", "07:15 PM", "9:55 PM"],
        },
        {
          "cinemaHall": "Melody Cinemas",
          "showTimings": ["9:00AM", "03:30 PM", "05:00 PM", "9:55 PM"],
        },
        {
          "cinemaHall": "PVT Movies",
          "showTimings": ["11:00AM", "01:30 PM", "11:30 PM", "06:00 PM", "10:00 PM"],
        },
        {
          "cinemaHall": "LuXor Vison",
          "showTimings": ["8:00AM", "011:30 AM", "11:30 PM", "05:30 PM", "07:15 PM", "9:55 PM"],
        }
      ]
  

    const [timeAndHall, setTimeAndHall] = useState('')

 const onClickTiming = (e) =>{
   console.log('e.target.value'  , props.setBookingTimeAndHall)
    props.setBookingTimeAndHall(e.target.value);
    console.log('e.setBookingTimeAndHall.value'  , props.setBookingTimeAndHall)
    setTimeAndHall( e.target.value)
  }

 
  
   
    return (
      <div className="showtiming-class-container">
           <FormControl  component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="left">
        { showTimingAndHallData.map((record, index) => {
        return (
          <div key={index}>{record.cinemaHall}  :
      
            {record.showTimings.map((timing, index2) => {
            return (
              <FormControlLabel key={index2}
              value={`${record.cinemaHall} ${timing}`}
              control={<Radio color="primary" onChange={onClickTiming} />}
              label={timing}
              labelPlacement="left"
              />  )
          })} </div>

        )

      })}</RadioGroup>
      </FormControl>
      <p>Selected Cinema Hall & Time : {(timeAndHall)}</p>
      </div>)
}

const mapDispatchToProps = {
  setBookingTimeAndHall: setBookingTimeAndHall,
}

export default connect(null, mapDispatchToProps)(ShowTiming);
