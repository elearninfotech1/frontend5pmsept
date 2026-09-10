import React from 'react'
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Footer/Footer';
import Routing from '../Routing';

const App = () => {
  return (
    <>
      <Header />
      <Routing />
      <Footer />      
    </>
  )
}

export default App