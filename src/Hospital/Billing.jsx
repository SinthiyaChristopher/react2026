import React, { useState } from "react";

export default function Billing() {
  const [bills, setBills] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [amount, setAmount] = useState("");

  const addBill = () => {
    if (!patientName || !amount) return alert("Patient name and amount required!");

    const newBill = {
      id: Date.now(),
      patientName,
      amount
    };

    setBills([...bills, newBill]); 
    setPatientName("");
    setAmount("");
  };

  const deleteBill = (id) => {
    setBills(bills.filter(b => b.id !== id));
  };

  return (
    <div>
      <h3>Billing</h3>
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addBill}>Add Bill</button>

      <ul>
        {bills.map(b => (
          <li key={b.id}>
            {b.patientName} — ₹{b.amount}
            <button onClick={() => deleteBill(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}