import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/customers/';

export const EditCostumer = () => {

  const [first_name, setFirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [table_number, setTable_number] = useState('');

  const navigate = useNavigate();
  const {id} = useParams();

  const update = async (e) => {
    
    e.preventDefault();
    await axios.put(URI+id, {
      first_name: first_name,
      last_name: last_name,
      table_number: table_number
    });

    navigate('/');

  }

  useEffect( () => {
    getBlogById()
  });

  const getBlogById = async () => {
    const res = await axios.get(URI+id);
    setFirst_name(res.data.first_name);
    setlast_name(res.data.last_name);
    setTable_number(res.data.table_number);
  }

  return (
    <div className='container text-center text-white'>
      <h3>Edit Item</h3>
      <form onSubmit={update}>
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
            onChange={ (e) => setlast_name(e.target.value)} 
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
