import Calendar from 'react-calendar';
import './Mycalender.css'
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar({date,handelDate}) {

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={handelDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}