import React, {useState} from 'react';
import '../../App.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import './PeriodTracker.css'
import Footer from '../Footer';
import { Calendar } from "react-modern-calendar-datepicker";

export default function PeriodTracker(){
const [cycleLength, setCycleLength] = useState('');
const [cycleLength2, setCycleLength2] = useState('');
const handleSubmit = (e) => {
  e.preventDefault();
    setCycleLength('');
};
const [selectedDay, setSelectedDay] = useState(null);

const [finalDate, setFinalDate] = useState(null);

const Add=(e)=>{
  e.preventDefault();
  let currentSum=parseInt(cycleLength);
  if(currentSum==='')
  return;
 
  console.log(selectedDay,cycleLength2)
  var dt = new Date(selectedDay.year, selectedDay.month-1, selectedDay.day);
  console.log(dt)
  dt.setDate(dt.getDate()+parseInt(cycleLength2))
  setFinalDate(dt)    
}


  return (
    <>
    <div className='background1'>

    <article>
          <form className='form1' onSubmit={handleSubmit}>
            <div className='form-control1'>
              <label htmlFor='cycleLength'>How long does your period last?</label>
              <input
                type='number'
                id='cycleLength'
                name='cycleLength'
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
              />
            </div>
            <div className='form-control2'>
              <label htmlFor='cycleLength2'>Average length of your period cycle:</label>
              <input
                type='number'
                id='cycleLength2'
                name='cycleLength2'
                value={cycleLength2}
                onChange={(e) => setCycleLength2(e.target.value)}
              />
            </div>
            <div className='form-control3'>
              <label htmlFor='cycleLength'>Select the start date corresponding to your previous period: </label>
           

    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
    
    <div>
            {
              finalDate ? (
                <div>
                  Your next period is most likely to start on {finalDate.getDate()}/{finalDate.getMonth()+1}/{finalDate.getYear()-100+2000}
                </div>
              ) : <div></div>
            }
          </div>
            </div>
            <button className='form-button' type='submit' onClick={Add}>
              Submit
            </button>
   </form>
        </article>
        </div>
      <Footer></Footer>
    </>
  );
}
export const Add= () => {}; 
