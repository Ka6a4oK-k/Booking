import React, { useState } from 'react';
import './register.css';
import { FormElement } from './components';

export default function Register() {

    const [state, setstate] = useState({
        userInfo: {},
        isFirstNameValid: true,
        isLastNameValid: true,
        isPhoneValid: true,
        isAddressValid: true,
        isEmailValid: true,
        isPasswordValid: true,
        isPasswordConfirmed: true,
    })

    // const validateName = (e) => {
    //     if (e.target.inputName === "firstName") {
    //         if (e.target.value.match(/^[A-Z][a-z]+/)) {
    //             setstate({ ...state, isFirstNameValid: true });
    //         } else setstate({ ...state, isFirstNameValid: false });
    //     } else if (e.target.inputName === "lastName") {
    //         if (e.target.value.match(/^[A-Z][a-z]+/)) {
    //             setstate({ ...state, isLastNameValid: true });
    //         } else setstate({ ...state, isLastNameValid: false });
    //     }
    // }

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

    const validatePhone = (e) => {
        if (e.target.value.match(/^[+][0-9]+/)) {
            setstate({ ...state, isPhoneValid: true });
        } else setstate({ ...state, isPhoneValid: false });
    }

    const validateEmail = (e) => {
        if (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setstate({ ...state, isEmailValid: true });
        } else setstate({ ...state, isEmailValid: false });
    }

    const validatePassword = (e) => {
        if (e.target.value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}/g)) {
            setstate({ ...state, isPasswordValid: true });
        } else setstate({ ...state, isPasswordValid: false });
        validatePasswordConfirmition();
    }

    const validatePasswordConfirmition = (e) => {
        if (state.userInfo.password === state.userInfo.passwordConfirmition) {
            setstate({ ...state, isPasswordConfirmed: true })
        } else setstate({ ...state, isPasswordConfirmed: false })
    }

    const handleChange = (e) => {
        setstate({ ...state, userInfo: { ...state.userInfo, [e.target.name]: e.target.value } });
    }

    const register = () => {
        const usersFromLocalStorage = localStorage.getItem('users');
        const users = JSON.parse(usersFromLocalStorage) || [];

        const newUsers = [...users, state.userInfo]

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
                            text="First Name"
                            validationCheck={validateName}
                        />
                        <FormElement
                            errorText="Last name is not valid"
                            isLastNameValid={state.isLastNameValid}
                            inputName="lastName"
                            isValid={state.isLastNameValid}
                            handleChange={handleChange}
                            text="Last Name"
                            validationCheck={validateLastName}
                        />
                        <FormElement
                            errorText="Address is not valid"
                            isFirstNameValid={state.isAddressValid}
                            inputName="address"
                            isValid={state.isAddressValid}
                            handleChange={handleChange}
                            text="Address"
                        />
                        <FormElement
                            errorText="Phone number is not valid"
                            isPhoneValid={state.isPhoneValid}
                            inputName="phone"
                            isValid={state.isPhoneValid}
                            handleChange={handleChange}
                            text="Phone"
                            validationCheck={validatePhone}
                        />
                        <FormElement
                            errorText="Email is not valid"
                            isEmailValid={state.isEmailValid}
                            inputName="email"
                            isValid={state.isEmailValid}
                            handleChange={handleChange}
                            text="Email"
                            validationCheck={validateEmail}
                        />

                        <FormElement
                            errorText="Password is not valid"
                            isPasswordValid={state.isPasswordValid}
                            inputName="password"
                            isValid={state.isPasswordValid}
                            handleChange={handleChange}
                            text="Password"
                            validationCheck={validatePassword}
                        />

                        <FormElement
                            errorText="Password is not confirmed"
                            isPasswordConfirmed={state.isPasswordConfirmed}
                            inputName="passwordConfirmition"
                            isValid={state.isPasswordConfirmed}
                            handleChange={handleChange}
                            text="Confirm Password"
                            validationCheck={validatePasswordConfirmition}
                        />

                    </form>
                    <button onClick={register}>Register</button>
                </div>
            </main >
        </div >
    )
}
