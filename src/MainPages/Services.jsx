import React, { useEffect, useState } from 'react'
import mainStyles from './mainStyles.module.css'
import axios from 'axios'
import useFetchData from './FetchData';
import { Link } from 'react-router-dom';
const Services = () => {
    const data=useFetchData('https://sept5pmjson.onrender.com/services');//
    return (
      <>
        <section className={mainStyles.bread}>
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h1>Services</h1>
                </div>
            </div>
            </div>
        </section>
        <section className={`my-5`}>
            <div className='container'>
                <div className='row'>
                        {
                            data.map((ser) => {
                                return (
                                    <div className='col-md-3 mb-3' key={ser.id}>
                                       <Link to={`/subservices/${ser.sname}`}>
                                        <div>
                                         <h5>{ser.sname}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                            
                    }
                </div>
            </div>      
            </section>
    </>
  )
}

export default Services