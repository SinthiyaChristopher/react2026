import React, { useReducer, useState } from 'react'

const initialState = [];
function reducer(state, action){
    switch (action.type){
        case "ADD":
            return [...state,action.payload];
            case "DELETE":
                return state.filter(p => p.id !== action.payload);
default:
    return state;
    }
}
export default function Patient() {
    const [patients, dispatch] = useReducer(reducer, initialState);
    const [name, setName]= useState("");

    const addPatient = () => {
        if(name.trim() ==="")return;
        const newPatient = {id: Date.now(), name};
        dispatch({ type: "ADD", payload: newPatient});
        setName("");
    };
  return (
    <div>
     <h2>Patients</h2>
     <input
        type="text"
        placeholder="Enter patient name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     <button onClick = {addPatient}>Add Patient</button>
     <ul>
        {patients.map(p =>(
            <li key={p.id}>
                {p.name} {""}
                <button onClick={()=> dispatch({type: "DELETE", payload: p.id})}>
                Delete</button>
            </li>
        ))}
     </ul>
      
    </div>
  );
}
