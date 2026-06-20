import React, { useEffect, useState } from 'react'

export default function Doctor() {

    const [doctors, setDoctors]=useState([]);
    const [name, setName] = useState("");
    const [specialty, setSpecialty]= useState("");

    useEffect(() => {
        setDoctors([
        {id: 1, name: "Dr.Kaviarasu", specialty:"Pediatrician"},
        {id: 2, name: "Dr.Jayalakshmi", specialty:"Gynagologist"}
  
        ]);
    },[]);

    const addDoctor = () => {
    if (name.trim() === "" || specialty.trim() === "") return;
    const newDoctor = { id: Date.now(), name, specialty };
    setDoctors([...doctors, newDoctor]);
    setName("");      
    setSpecialty(""); 
    };

    const deleteDoctor = (id) => {
      setDoctors(doctors.filter(doc => doc.id !== id));
    };

  return (
    <div className="container">
        <h3>Doctors</h3>
         <input
        type="text"
        placeholder="Doctor's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
       <button onClick={addDoctor}>Add Doctor</button>
      <ul>
        {doctors.map(doc =>(
            <li key={doc.id}>
              {doc.name} - {doc.specialty} {" "}
              <button onClick={() => deleteDoctor(doc.id)}>Delete</button>
              </li>
        ))}
      </ul>
    </div>
  );
    }
 
