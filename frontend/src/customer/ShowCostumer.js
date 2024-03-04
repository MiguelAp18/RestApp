import axios from 'axios'   
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/customers/';

const ShowCostumer = () => {
    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
      getCostumers()
    }, []);

    const getCostumers = async () => {
      const res = await axios.get(URI);
      setCustomers(res.data);
    }

    const deleteCostumer = async (id) => {
      await axios.delete(`${URI}${id}`);
      getCostumers();
    } 
    
    return(

        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
                <Link to='/create' className='btn btn-primary my-5 w-25'>Create <i className="bi bi-plus-lg"></i></Link>              
                <table className='table'>
                  <thead className='table-primary'>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Table Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      customers.map( (customer) => (
                        <tr key={customer.idcustomers}className='tr'>
                          <td> {customer.first_name} </td>
                          <td> {customer.last_name} </td>
                          <td> {customer.table_number} </td>
                          <td>
                            <Link to={`/edit/${customer.idcustomers}`} className='btn btn-info mx-1'><i className="bi bi-pencil-square"></i></Link>
                            <button onClick={ () => deleteCostumer(customer.idcustomers)} className='btn btn-danger mx-1'><i className="bi bi-trash"></i></button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>
          </div>
        </div>
    )

}

export default ShowCostumer;