import React, { useEffect, useState } from 'react'
import mainStyles from './mainStyles.module.css'
import axios from 'axios'
import useFetchData from './FetchData';
import { Link, useParams } from 'react-router-dom';
const ServiceProvider = () => {

    const { sername, subsname } = useParams();
    
    const data=useFetchData(`https://sept5pmjson.onrender.com/serviceproviders/?sname=${sername}&subsname=${subsname}`);//
    return (
      <>
        <section className={mainStyles.bread}>
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h1>Service Provider</h1>
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
                                    <div className='col-md-8 mb-3' key={ser.id}>
                                        <div className='border-bottom p-3'>
                                            <h5 className='mb-4'>{ser.bname}</h5>
                                            <p>Name: {ser.spname}</p>
                                            <p>Email: {ser.email}</p>
                                            <p>Phone: {ser.phone}</p>
                                            <p>Address: {ser.address}</p>
                                            <Link to={`tel:${ser.phone}`} className='me-2'>
                                                <button className='btn btn-primary me-2'>Call</button>
                                            </Link>
                                            <Link to={`/bookservice/${ser.sname}/${ser.subsname}/${ser.spname}/${ser.bname}`} className='text-decoration-none'>
                                                <button className='btn btn-success'>Book Service</button>
                                                </Link>
                                        </div>
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

export default ServiceProvider