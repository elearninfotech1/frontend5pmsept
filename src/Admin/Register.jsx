import React, { useState } from 'react'
import adminStyles from './admin.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });

  const navigate = useNavigate();
  
  const { name, email, password, phone, address } = data;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const submitHandler = async (e) => {
    try
    {
      e.preventDefault();
      const result = await axios.post(`https://sept5pmjson.onrender.com/users`, data);
      alert("Registered Successfully");
      navigate('/admin');
    }
    catch(err)
    {
      console.log(err);
    }
    
  }

    return (
      <>
    <section className={adminStyles.bread}>
         <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
              <h1>Admin Register</h1>
            </div>
          </div>
          </div>
    </section>
    <section className={`my-5 ${adminStyles.admin}`}>
          <div className='container'>
              <div className='row'>
                <div className='col-md-4 mx-auto'>
                <form onSubmit={submitHandler} className={adminStyles.form}>
                      <div className='mb-4'>
                    <input type='text' name='name' value={name} onChange={changeHandler} placeholder='Name' className='form-control' />
                          </div>
                        <div className='mb-4'>
                              <input type='text' name='email' value={email} onChange={changeHandler} placeholder='Username' className='form-control' />
                          </div>
                          <div className='mb-4'>
                              <input type='password' name='password' value={password} onChange={changeHandler} placeholder='Password' className='form-control' />
                  </div>
                  <div className='mb-4'>
                              <input type='text' name='phone' value={phone} onChange={changeHandler} placeholder='Phone' className='form-control' />
                  </div>
                  <div className='mb-4'>
                              <input type='text' name='address' value={address} onChange={changeHandler} placeholder='Address' className='form-control' />
                          </div>
                          <div>
                              <input type='reset' value="Cancel" />
                              <input type='submit' value="Register" />
                          </div>                               
                 
                        </form>        
                                                
                </div>
              </div>
          </div>      
        </section>
    </>
  )
}

export default Register