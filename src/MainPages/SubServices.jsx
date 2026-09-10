import React, { useEffect, useState } from 'react'
import mainStyles from './mainStyles.module.css'
import axios from 'axios'
import useFetchData from './FetchData';
import { Link, useParams } from 'react-router-dom';
const SubServices = () => {

    const { sername } = useParams();
    
    const data=useFetchData(`https://sept5pmjson.onrender.com/subservices/?sname=${sername}`);//
    return (
      <>
        <section className={mainStyles.bread}>
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h1>Sub Services</h1>
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
                                        <Link to={`/serviceprovider/${ser.sname}/${ser.subsname}`} className='text-decoration-none text-dark'>
                                       <div>
                                         <h5>{ser.subsname}</h5>
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

export default SubServices