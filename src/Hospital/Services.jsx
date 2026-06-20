import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div className="header3">
        <h2>Services</h2>
        <div className="header2">
            <Link to = {"doctor"}>Doctors</Link>
            <Link to = {"patient"}>Patient</Link>
            <Link to = {"appointment"}>Appointment</Link>
        </div>
        <Outlet/>

    </div>
  );
}
