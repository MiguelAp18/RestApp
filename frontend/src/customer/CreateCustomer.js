import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/customers/';

export const CreateCustomer = () => {

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [table_number, setTable_number] = useState('');

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { 
      first_name: first_name,
      last_name: last_name,
      table_number: table_number
    });
    navigate('/');
  }

  return (
    <div className='container text-center'>
      <h3>Create Item</h3>
      <form onSubmit={store}>
        <div className="my-3">
          <label className='form-label'>First Name</label>
          <input
            value={first_name}
            onChange={ (e) => setFirst_name(e.target.value)} 
            type="text"
            className='form-control'
          />
        </div>
        <div className="mb-3">
          <label className='form-label'>Last Name</label>
          <input
            value={last_name}
            onChange={ (e) => setLast_name(e.target.value)} 
            type="text"
            className='form-control'
          />
        </div>
        <div className="mb-3">
          <label className='form-label'>Table Number</label>
          <input
            value={table_number}
            onChange={ (e) => setTable_number(e.target.value)} 
            type="text"
            className='form-control'
          />
        </div>
        <button type="submit" className="btn btn-primary w-25 my-2">Save</button>
      </form>
    </div>
  )
}
