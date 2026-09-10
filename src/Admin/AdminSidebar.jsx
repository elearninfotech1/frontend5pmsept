import React from 'react'
import { Link } from 'react-router-dom'
import adminStyles from './admin.module.css'
const AdminSidebar = () => {
  return (
      <ul className={adminStyles.sidebar}>
          <li>
              <Link to="">
                Add Service
              </Link>
          </li> 
          <li>
              <Link to="addsubservice">
                Add Sub Service
              </Link>
          </li> 
          <li>
              <Link to="addserviceprovider">
                Add Service Provider
              </Link>
          </li> 
          <li>
              <Link to="addoffers">
                  Add Offers
              </Link>
          </li>
          <li>
              <Link to="deleteservice">
                Delete Services
              </Link>
          </li> 
           <li>
              <Link to="deletesubservice">
                Delete Sub Services
              </Link>
          </li> 
           <li>
              <Link to="deleteserviceprovider">
                Delete Service Provider
              </Link>
          </li> 
          <li>
              <Link to="deleteoffers">
                Delete Offers
              </Link>
          </li> 
          <li>
              <Link to="userdata">
                User Data
              </Link>
          </li> 
    </ul>
  )
}

export default AdminSidebar