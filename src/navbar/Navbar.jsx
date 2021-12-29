import React, { useContext } from "react";
import {NavElement} from "./components"
import IsAuthenticatedContext from '../contexts/isAuthenticated';
import './navbar.css'

export default function Navbar() {
   const {isAuthenticated} = useContext(IsAuthenticatedContext)

   return (
      <div className='navbar'>
         {!isAuthenticated && <NavElement
            link="/signin"
            text="Sign in"
         />}
         {!isAuthenticated && <NavElement
            link="/register"
            text="Registration"
         />}
         <NavElement
            link="/"
            text="Booking"
         />
      </div>
   )
}