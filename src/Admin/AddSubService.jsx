import React, { useState } from 'react'
import adminStyles from './admin.module.css';
import axios from 'axios';

const AddSubService = () => {
  const [data, setData] = useState({
    sname: "",
    subsname: "",
    description: ""
  })
  
  const { sname, subsname, description } = data;

  const changeHandler = (e) => { 
        const {name, value} = e.target;
        setData({ ...data, [name]: value })
  }
  
  const submitHandler = async (e) => { 
        try
        {
            e.preventDefault();
            const sdata = await axios.post(`https://sept5pmjson.onrender.com/subservices`, data); 
            alert("Sub Service Added Successfully");
            setData({
                sname: "",
                subsname: "",
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
                      <input type='text' name='subsname' value={subsname} onChange={changeHandler} placeholder='Sub Service Name' className='form-control' />
                  </div>
                  <div className='mb-4'>
                      <textarea type='text' name='description' value={description} onChange={changeHandler} placeholder='Sub Service Description' className='form-control'></textarea>
                  </div>
                  <div>
                      <input type='reset' value="Cancel" />
                      <input type='submit' value="Add Sub Service" />
                  </div>
                                
                  
                        </form>        
                                                
                </div>
              </div>
          </div>      
        </section>
  )
}

export default AddSubService