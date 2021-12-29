import React, { useContext } from "react";
import './BookingForm.css'
import IsAuthenticatedContext from '../contexts/isAuthenticated';
import AuthenticatedUserContext from "../contexts/authenticatedUser";

export default function BookingForm() {
    const {isAuthenticated, setIsAuthenticated} = useContext(IsAuthenticatedContext)
    const {authenticatedUser, setAuthenticatedUser} = useContext(AuthenticatedUserContext)

    function logout(){
        localStorage.removeItem('authenticatedUser');
        setIsAuthenticated(false)
        setAuthenticatedUser({})
     }
     
    return(
        <div>
            <div className="booking-form-wrapper">
                <div className='bookingFormElement'>
                    <input type="date" />
                </div>
                <div className='bookingFormElement'>
                    <input type="date" />
                </div>
                <select name="select" >
                    <option value="dungeon">Dungeon</option>
                    <option value="gym">Gym</option>
                    <option value="bar">Gay bar</option>
                </select>
                {/* <div className='bookingFormElement'>
                    <input type="select" />
                </div> */}
                <button>Fuck me.</button>
            </div>
            <button onClick={logout}>Log out</button>
        </div>
        
    )
}