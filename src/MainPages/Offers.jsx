import React, { useEffect, useState } from 'react'
import mainStyles from './mainStyles.module.css'
import axios from 'axios'
import useFetchData from './FetchData';
const Offers = () => {
    const data=useFetchData('https://sept5pmjson.onrender.com/offers');
    return (
      <>
        <section className={mainStyles.bread}>
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h1>Offers</h1>
                </div>
            </div>
            </div>
        </section>
        <section className={`my-5`}>
            <div className='container'>
                <div className='row'>
                        {
                            data.map((off) => {
                                return (
                                    <div className='col-md-12 mb-3' key={off.id}>
                                       <div>
                                         <p>{off.sname}</p>
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

export default Offers