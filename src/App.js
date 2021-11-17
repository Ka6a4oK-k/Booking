import './App.css';
import { Login } from './login';
import { Register } from './register'
import { Navbar } from './navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import React, { Suspence, lazy } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content-wrapper'>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
