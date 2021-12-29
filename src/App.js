import './App.css';
import {ProtectedRoute} from './protectedRoute'
import { Login } from './login';
import { Register } from './register'
import { Navbar } from './navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookingForm from './bookingForm/BookingForm';
import IsAuthenticatedContext from './contexts/isAuthenticated';
import AuthenticatedUserContext from './contexts/authenticatedUser';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authenticatedUser"))
  const [authenticatedUser, setAuthenticatedUser] = useState(localStorage.getItem("authenticatedUser"))

  //console.log('isAuthenticated', isAuthenticated);

  return (
    <AuthenticatedUserContext.Provider value={{ authenticatedUser, setAuthenticatedUser}}>
      <IsAuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Router>
          <div className="App">
            <Navbar />
            <div className='content-wrapper'>
              <Routes>
                <Route path='/signin' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={
                  <ProtectedRoute>
                    <BookingForm />
                  </ProtectedRoute>
                } />
              </Routes>
            </div>
          </div>
        </Router>
      </IsAuthenticatedContext.Provider>
    </AuthenticatedUserContext.Provider>
  );
}

export default App;