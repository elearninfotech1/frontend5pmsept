import React from 'react'
import adminStyles from './admin.module.css'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
const AdminDasboard = () => {
    return (
      <>
    <section className={adminStyles.bread}>
         <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
              <h1>Admin Dashboard</h1>
            </div>
          </div>
          </div>
    </section>
    <section className={`my-5 ${adminStyles.admin}`}>
          <div className='container'>
              <div className='row'>
                <div className='col-md-3'>                     
                      <AdminSidebar />                          
              </div>
              <div className='col-md-9'>                     
                    <Outlet />                     
                </div>
              </div>
          </div>      
        </section>
    </>
  )
}

export default AdminDasboard