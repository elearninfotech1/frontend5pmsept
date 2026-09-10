import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NOPage from './src/MainPages/NOPage'
import Admin from './src/Admin/Admin'
import Register from './src/Admin/Register'
import AdminDasboard from './src/Admin/AdminDasboard'
import AddService from './src/Admin/AddService'
import AddSubService from './src/Admin/AddSubService'
import AddServiceProvider from './src/Admin/AddServiceProvider'
import AddOffers from './src/Admin/AddOffers'
import Services from './src/MainPages/Services'
import DeleteService from './src/Admin/DeleteService'
import SubServices from './src/MainPages/SubServices'
import ServiceProvider from './src/MainPages/ServiceProvider'
import BookService from './src/MainPages/BookService'
import ForgotPassword from './src/Admin/ForgotPassword'

const Routing = () => {
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/services" Component={Services} />
        <Route path="/subservices/:sername" Component={SubServices} />
        <Route path="/serviceprovider/:sername/:subsname" Component={ServiceProvider} />
        <Route path="/bookservice" Component={BookService} />
        <Route path="/bookservice/:sername/:subsername/:serpname/:bpname" Component={BookService} />
        <Route path='/admin' Component={Admin} />
        <Route path='/register' Component={Register} />
        <Route path='/forgotpassword' Component={ForgotPassword} />
        <Route path="/admindashboard" Component={AdminDasboard}>
              <Route path="" Component={AddService} /> 
              <Route path="addsubservice" Component={AddSubService} /> 
              <Route path="addserviceprovider" Component={AddServiceProvider} /> 
              <Route path="addoffers" Component={AddOffers} /> 
              <Route path="deleteservice" Component={DeleteService} />
        </Route>
        
        <Route path="*" Component={NOPage} />
      </Routes>
    </>
  )
}

export default Routing