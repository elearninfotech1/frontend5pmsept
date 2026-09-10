import React, { useState } from 'react'
import axios from 'axios';
import mainStyles from './mainStyles.module.css'
import { useParams } from 'react-router-dom';

const BookService = () => {

   const { sername, subsername, serpname, bpname } = useParams();

   const [data, setData] = useState({
    sname: sername || "",
    subsname: subsername || "",
     spname: serpname || "",
       bname: bpname || "",
     cname:"",
     email: "",
     phone: "",
      address: "",
   })
  
  const { sname, subsname, spname, bname, cname, email, phone, address } = data;

  const changeHandler = (e) => { 
        const {name, value} = e.target;
        setData({ ...data, [name]: value })
  }

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const sdata = await axios.post(`https://sept5pmjson.onrender.com/servicedata`, data);
      alert("Service Booked Successfully");
      setData({
        sname: "",
        subsname: "",
        spname: "",
        bname: "",
        cname: "",
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
      <>
      <section className={mainStyles.bread}>
                  <div className='container'>
                  <div className='row'>
                      <div className='col-md-12'>
                      <h1>Book Service</h1>
                      </div>
                  </div>
                  </div>
            </section>
            <section className={`my-5`}>
              <div className='container'>
                  <div className='row'>
                    <div className='col-md-5 mx-auto'>
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
                          <input type='text' name='cname' value={cname} onChange={changeHandler} placeholder='Customer Name' className='form-control' />
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
                          <input type='submit' value="Book Service" className='btn btn-success' />
                      </div>
                                    
                      
                            </form>        
                                                    
                    </div>
                  </div>
              </div>      
            </section>
              </>
     
  )
}

export default BookService