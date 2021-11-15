import './App.css';
import { Login } from './login';
import { Register } from './register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import React, { Suspence, lazy } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Suspence> */}
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
        </Routes>
        
        {/* <Register /> */}
        {/* <Login /> */}
        {/* </Suspence> */}
      </div>
    </Router>
  );
}

export default App;
