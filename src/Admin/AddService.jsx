import React, { useState } from 'react'
import adminStyles from './admin.module.css';
import axios from 'axios';
const AddService = () => {
    const [data, setData] = useState({
        sname: "",
        description: ""
    })

    const { sname, description } = data;

    const changeHandler = (e) => { 
        const {name, value} = e.target;
        setData({ ...data, [name]: value })
    }

    const submitHandler = async (e) => { 
        try
        {
            e.preventDefault();
            const sdata = await axios.post(`https://sept5pmjson.onrender.com/services`, data); 
            alert("Service Added Successfully");
            setData({
                sname: "",
                description: ""
            })
        }
        catch (error) {
            console.error("Error adding service:", error);
            alert("Error adding service");
        }
    }

  return (
   <section className={`${adminStyles.admin}`}>
          <div className='container'>
              <div className='row'>
                <div className='col-md-7'>
                      <form onSubmit={submitHandler}>
                        <div className='mb-4'>
                              <input type='text' name='sname' value={sname} onChange={changeHandler} placeholder='Service Name' className='form-control' />
                          </div>
                          <div className='mb-4'>
                              <textarea type='text' name='description' value={description} onChange={changeHandler} placeholder='Service Description' className='form-control'></textarea>
                          </div>
                          <div>
                              <input type='reset' value="Cancel" />
                              <input type='submit' value="Add Service" />
                          </div>
                                
                  
                        </form>        
                                                
                </div>
              </div>
          </div>      
        </section>
  )
}

export default AddService