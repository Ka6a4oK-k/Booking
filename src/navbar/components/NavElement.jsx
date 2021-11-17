import React from "react";
import {Link} from "react-router-dom"
import "./navElement.css"

export default function NavElement(props){

    return (
        <Link className='navElement' to={props.link} >
            <div>
                {props.text}
            </div>
        </Link>
    )
}