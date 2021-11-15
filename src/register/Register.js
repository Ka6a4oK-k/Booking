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
    }

    const validatePasswordConfirmition = (e) => {
        if (state.userInfo.password === state.userInfo.passwordConfirmition){
            setstate({...state, isPasswordConfirmed: true})
        } else setstate({...state, isPasswordConfirmed: false})
    }

    const handleChange = (e) => {
        setstate({ ...state, userInfo: { ...state.userInfo, [e.target.name]: e.target.value } });
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
                            text="First Name"
                            validateName={validateName}
                        />
                        <FormElement
                            errorText="Last name is not valid"
                            isLastNameValid={state.isLastNameValid}
                            inputName="lastName"
                            isValid={state.isLastNameValid}
                            handleChange={handleChange}
                            text="Last Name"
                            validateName={validateLastName}
                        />
                        <FormElement
                            errorText="Address is not valid"
                            isFirstNameValid={state.isAddressValid}
                            inputName="address"
                            isValid={state.isAddressValid}
                            handleChange={handleChange}
                            text="Address"
                            validateName={true}
                        />
                        <FormElement
                            errorText="Phone number is not valid"
                            isPhoneValid={state.isPhoneValid}
                            inputName="phone"
                            isValid={state.isPhoneValid}
                            handleChange={handleChange}
                            text="Phone"
                            validateName={validatePhone}
                        />
                        <FormElement
                            errorText="Email is not valid"
                            isEmailValid={state.isEmailValid}
                            inputName="email"
                            isValid={state.isEmailValid}
                            handleChange={handleChange}
                            text="Email"
                            validateName={validateEmail}
                        />

                        <FormElement
                            errorText="Password is not valid"
                            isPasswordValid={state.isPasswordValid}
                            inputName="password"
                            isValid={state.isPasswordValid}
                            handleChange={handleChange}
                            text="Password"
                            validateName={validatePassword}
                        />

                        <FormElement
                            errorText="Password is not confirmed"
                            isPasswordConfirmed={state.isPasswordConfirmed}
                            inputName="passwordConfirmition"
                            isValid={state.isPasswordConfirmed}
                            handleChange={handleChange}
                            text="Confirm Password"
                            validateName={validatePasswordConfirmition}
                        />

                    </form>
                    <button onClick={register}>Register</button>
                </div>
            </main >
        </div >
    )
}
