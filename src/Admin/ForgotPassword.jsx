import React, { useState } from 'react'
import adminStyles from './admin.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const ForgotPassword = () => {
   const [data, setData] = useState({     
      email: ""
   });
  
  const [info, setInfo] = useState("");
  
  const navigate = useNavigate();
  
  const { email } = data;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const submitHandler = async (e) => {
    try
    {
      e.preventDefault();
      const result = await axios.get(`https://sept5pmjson.onrender.com/users/?email=${email}`);
      //console.log(result.data[0].password);

      if (result.data.length > 0)
      {
        setInfo(`${result.data[0].password}`);
      }

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
              <h1>Forgot Password</h1>
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
                              <input type='text' name='email' value={email} onChange={changeHandler} placeholder='Username' className='form-control' />
                          </div>
                          <div>
                              <input type='reset' value="Cancel" />
                              <input type='submit' value="Forgot Password" />
                          </div>
                                
                 
                        </form>   

                     <p className='text-center text-success my-4'> {info && `Your password is: ${info}`}</p>

                {

                }
                                                
                </div>
              </div>
          </div>      
        </section>
    </>
  )
}

export default ForgotPassword