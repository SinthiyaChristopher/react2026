import React, { useRef, useState } from 'react'

export default function Appointment() {
    const nameRef = useRef();

    const [appointments, setAppointments]= useState([]);
    const[message, setMessage]=useState("");

    const handleSubmit = e => {
    e.preventDefault();
    const patientName = nameRef.current.value;
    if (!patientName) return alert("Name required!");
    setAppointments([...appointments, patientName]);
    setMessage(`Appointment for  ${patientName} has been booked:`);
    nameRef.current.value = "";
  };
  return (
    <div>
        <h3>Appointments</h3>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Patient Name" />
        <button type="submit">Book</button>
      </form>
      {message && <p style={{color:"red"}}>{message}</p>}
      <ul>
        {appointments.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
      
    </div>
  );
}
