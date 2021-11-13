import React, { useState } from 'react';
import './register.css';
import { FormElement } from './components';

export default function Register() {
    // const [userInfo, setUserInfo] = useState({});

    // const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [state, setstate] = useState({
        userInfo: {},
        isFirstNameValid: true,
        isLastNameValid: true,
    })

    const validateName = (e) => {
        if (e.target.value.match(/^[A-Z][a-z]+/)) {
            setstate({ ...state, isFirstNameValid: true });
        } else setstate({ ...state, isFirstNameValid: false });
    }

    const validateLastName = (e) => {
        if (e.target.value.match(/^[A-Z][a-z]+/)) {
            setstate({ ...state, isLastNameValid: true });
        } else setstate({ ...state, isLastNameValid: false });
    }

    // const validationCheck = 

    //     if(e.target.name === "phone"){
    //         if (e.target.value.match(/^[+][0-9]+/)) {
    //             e.target.isValid = true;
    //         } else e.target.isValid = false;
    //     }

    //     if(e.target.name === "email"){
    //         if (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    //             e.target.isValid = true;
    //         } else e.target.isValid = false;
    //     }

    //     console.log(e.target.isValid);
    // }

    const handleChange = (e) => {
        setstate({ ...state, userInfo:{...state.userInfo, [e.target.name]: e.target.value}});
    }

    const register = () => {
        const usersFromLocalStorage = localStorage.getItem('users');
        const users = JSON.parse(usersFromLocalStorage) || [];

        const newUsers = [...users, state.userInfo]
        console.log('newUsers', newUsers);

        localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
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
                        <FormElement
                            errorText="First name is not valid"
                            isFirstNameValid={state.isFirstNameValid}
                            inputName="firstName"
                            isValid={state.isFirstNameValid}
                            handleChange={handleChange}
                            text="First name"
                            validateName={validateName}
                        />
                        <div>
                            <div className="regiser_form-element">
                                <span>Last Name</span>
                                <input type="text" name="lastName" onChange={handleChange} onBlur={validateLastName} ></input>
                            </div>
                            {!state.isLastNameValid && <p className='form-element-error'>Last name is not valid.</p>}
                        </div>
                        <div className="regiser_form-element">
                            <span>Address</span>
                            <input type="text" name="address" onChange={handleChange}  ></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Phone</span>
                            <input type="phone" name="phone" onChange={handleChange}  ></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Email</span>
                            <input type="text" name="email" onChange={handleChange}  ></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Password</span>
                            <input type="text" name="password" onChange={handleChange}  ></input>
                        </div>
                        {/* <button type="submit" onClick={register}>Register</button> */}
                    </form>
                    <button onClick={register}>Register</button>
                </div>
            </main >
        </div >
    )
}
