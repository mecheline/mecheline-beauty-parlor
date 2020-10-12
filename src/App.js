import React from 'react';
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import ServicePage from './screens/ServicePage'
import ContactPage from './screens/ContactPage'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    
    <BrowserRouter>
    
    <Navbar/>
      <Route exact path = '/'><HomePage /></Route>
      <Route path = '/about'><AboutPage /></Route>
      <Route path = '/services'><ServicePage /></Route>
      <Route path = '/contacts'><ContactPage /></Route>
      <Footer />  
    </BrowserRouter>
    
  );
}

export default App;
