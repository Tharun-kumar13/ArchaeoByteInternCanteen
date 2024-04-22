
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Login from './components/Signin/Login';

import User from './components/Signin/User';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login set={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App