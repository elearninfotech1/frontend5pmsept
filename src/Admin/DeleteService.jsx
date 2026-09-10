import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import DataTable from 'datatables.net-dt';'datatables.net-dt/js/dataTables.dataTables.min.js';

const DeleteService = () => {
    const [data, setData] = useState([]);

    const fetchSericeData = async () => {
        try
        {
            const sdata = await axios.get(`https://sept5pmjson.onrender.com/services`);
            setData(sdata.data);
        }
        catch (error) {
            console.error("Error fetching service data:", error);
        }
     }

    useEffect(() => {
        fetchSericeData();
        setTimeout(() => { 
            new DataTable('#myTable');
        },1000)
    },[])

  return (
      <>
      <section>
            <div className='container'>
                  <div className='row'>
                      <div>
                          <table className='table table-bordered table-striped' id='myTable'>
                              <thead>
                                  <tr>
                                      <th>Action</th>
                                      <th>S.Name</th>
                                      <th>Description</th>
                                  </tr>
                              </thead>
                              <tbody>
                                   {
                            data.map((ser) => {
                                return (
                                    <tr key={ser.id}>
                                        <td>
                                            <button className='btn btn-danger'>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                        <td>{ser.sname}</td>
                                        <td>{ser.description}</td>
                                    </tr>
                                )
                            })
                            
                    }
                              </tbody>
                          </table>
                      </div>
                       
                </div>
            </div>      
            </section>
      </>
  )
}

export default DeleteService