import React from "react";
import {NavElement} from "./components"
import './navbar.css'

export default function Navbar(){
     return (
        <div className='navbar'>
            <NavElement
               link = "/"
               text = "Sign in"
            />
            <NavElement
               link = "/register"
               text = "Registration"
            />
        </div>
     )
}