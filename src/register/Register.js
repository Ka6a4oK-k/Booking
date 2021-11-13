import React, { useState } from 'react';
import './register.css';

export default function Register() {
    const [userInfo, setUserInfo] = useState({
    });

    const validationCheck = (e) => {
        if((e.target.name === "firstName") || (e.target.name === "lastName")){
            if (e.target.value.match(/^[A-Z][a-z]+/)) {
                e.target.isValid = true;
            } else e.target.isValid = false;
        }

        if(e.target.name === "phone"){
            if (e.target.value.match(/^[+][0-9]+/)) {
                e.target.isValid = true;
            } else e.target.isValid = false;
        }

        if(e.target.name === "email"){
            if (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                e.target.isValid = true;
            } else e.target.isValid = false;
        }

        console.log(e.target.isValid);
    }

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const register = () => {
        const usersFromLocalStorage = localStorage.getItem('users');
        const users = JSON.parse(usersFromLocalStorage) || [];

        const newUsers = [...users, userInfo]
        console.log('newUsers', newUsers);

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('users', JSON.stringify(newUsers));
    }

    return (
        <div>
            <header>
                Register Form
            </header>
            <main>
                <div className="register">
                    <form>
                        {/* <p>{userInfo.firstName}</p> */}
                        <div className="regiser_form-element">
                            <span>First Name</span>
                            <input type="text" name="firstName" onChange={handleChange} onBlur={validationCheck} ></input>
                        </div>
                        {/* <p>{userInfo.lastName}</p> */}
                        <div className="regiser_form-element">
                            <span>Last Name</span>
                            <input type="text" name="lastName" onChange={handleChange} onBlur={validationCheck} ></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Address</span>
                            <input type="text" name="address" onChange={handleChange} onBlur={validationCheck} ></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Phone</span>
                            <input type="phone" name="phone" onChange={handleChange} onBlur={validationCheck} ></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Email</span>
                            <input type="text" name="email" onChange={handleChange} onBlur={validationCheck} ></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Password</span>
                            <input type="text" name="password" onChange={handleChange} onBlur={validationCheck} ></input>
                        </div>
                        {/* <button type="submit" onClick={register}>Register</button> */}
                    </form>
                    <button onClick={register}>Register</button>
                </div>
            </main >
        </div >
    )
}
