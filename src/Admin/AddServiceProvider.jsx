import React, { useState } from 'react'
import adminStyles from './admin.module.css';
import axios from 'axios';

const AddServiceProvider = () => {
   const [data, setData] = useState({
    sname: "",
    subsname: "",
     spname: "",
     bname: "",
     email: "",
     phone: "",
      address: "",
   })
  
  const { sname, subsname, spname, bname, email, phone, address } = data;

  const changeHandler = (e) => { 
        const {name, value} = e.target;
        setData({ ...data, [name]: value })
  }

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const sdata = await axios.post(`https://sept5pmjson.onrender.com/serviceproviders`, data);
      alert("Service Provider Added Successfully");
      setData({
        sname: "",
        subsname: "",
        spname: "",
        bname: "",
        email: "",
        phone: "",
        address: ""
      })
    }
    catch (error) {
      console.error("Error adding service provider:", error);
      alert("Error adding service provider");
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
                          <input type='text' name='spname' value={spname} onChange={changeHandler} placeholder='Service Provider Name' className='form-control' />
                      </div>
                      <div className='mb-4'>
                          <input type='text' name='bname' value={bname} onChange={changeHandler} placeholder='Business Name' className='form-control' />
                      </div>
                      <div className='mb-4'>
                          <input type='email' name='email' value={email} onChange={changeHandler} placeholder='Email' className='form-control' />
                      </div>
                      <div className='mb-4'>
                          <input type='tel' name='phone' value={phone} onChange={changeHandler} placeholder='Phone' className='form-control' />
                      </div>
                      <div className='mb-4'>
                          <input type='text' name='address' value={address} onChange={changeHandler} placeholder='Address' className='form-control' />
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

export default AddServiceProvider