import React, { useState } from 'react'
import adminStyles from './admin.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Admin = () => {
   const [data, setData] = useState({     
      email: "",
      password: ""
   });
  
  const navigate = useNavigate();
  
   const { email, password } = data;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const submitHandler = async (e) => {
    try
    {
      e.preventDefault();
      const result = await axios.get(`https://sept5pmjson.onrender.com/users/?email=${email}&password=${password}`);

      if (result.data.length > 0)
      {
        alert("Logged in Successfully");
        navigate('/admindashboard');
      }
      else
      {
        alert("Invalid Credentials");
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
              <h1>Admin Login</h1>
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
                          <div className='mb-4'>
                              <input type='password' name='password' value={password} onChange={changeHandler} placeholder='Password' className='form-control' />
                          </div>
                          <div>
                              <input type='reset' value="Cancel" />
                              <input type='submit' value="Login" />
                          </div>
                                
                  <div className='mt-3 d-flex justify-content-between'>
                    <div>
                      <Link to="/forgotpassword">
                            Forgot Password?
                            </Link>
                    </div>
                    <div>
                      <Link to="/register">
                                Create a new User
                            </Link>
                    </div>
                            </div>
                        </form>        
                                                
                </div>
              </div>
          </div>      
        </section>
    </>
  )
}

export default Admin