import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker'
// import TimePicker from 'react-time-picker/dist/entry.nostyle';
export default function MyTimePicker({time,handelTime}) {
  const [value, onChange] = useState('10:00');

  return (
    <div>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
}