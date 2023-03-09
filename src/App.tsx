import './scss/app.scss'
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from "react-router-dom";
import './scss/app.scss'
import React from 'react';
// import EmtyCart from './pages/Empty-Cart';

const App: React.FC =()=> {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/cart' element={<EmtyCart />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
