import React, { useState, useEffect } from 'react';
import './register.css';
import { FormElement } from './components';
import axios from 'axios';

export default function Register() {

    const [state, setstate] = useState({
        userInfo: {
            'address' : '',
            'email' : '',
            'firstName': '',
            'lastName' : '',
            'password' : '',
            'passwordConfirmition' : '',
            'phone' : '',
        },
        userValidation: {
            isFirstNameValid: true,
            isLastNameValid: true,
            isPhoneValid: true,
            isAddressValid: true,
            isEmailValid: true,
            isPasswordValid: true,
            isPasswordConfirmed: true,
        },
    })

    // useEffect( () => {
    //     (async () => {
    //         const users = await axios.get("http://localhost:3000/users")
    //         console.log(users);
    //     })()
    //   }, []);

    const NAME_MAPPER = {
        firstName: 'isFirstNameValid',
        lastName: 'isLastNameValid',
    } 

    const validateName = (e) => {
        const { name } = e.target;
        const fieldName = NAME_MAPPER[name];
        console.log(name);
        if (e.target.value.match(/^[A-Z][a-z]+/)) {
            setstate({ ...state, userValidation: {...state.userValidation, [fieldName]: true }});
        } else setstate({ ...state, userValidation: {...state.userValidation, [fieldName]: false}});
    }

    const validatePhone = (e) => {
        if (e.target.value.match(/^[+][0-9]+/)) {
            setstate({ ...state, ...state.userValidation.isPhoneValid = true });
        } else setstate({ ...state, ...state.userValidation.isPhoneValid = false });
    }

    const validateEmail = (e) => {
        if (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setstate({ ...state, ...state.userValidation.isEmailValid = true });
        } else setstate({ ...state, ...state.userValidation.isEmailValid = false });
    }

    const validatePassword = (e) => {
        const newState = {...state}
        if (e.target.value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}/g)) {
            newState.userValidation.isPasswordValid = true;
            setstate(newState);
        } else {
            newState.userValidation.isPasswordValid = false;
            setstate(newState);
        }
        validatePasswordConfirmition(e, newState);
    }

    const validatePasswordConfirmition = (e, newState = {}) => {
        const currentState = {...state, ...newState};
        if (state.userInfo.password === state.userInfo.passwordConfirmition) {
            setstate({ ...currentState, ...state.userValidation.isPasswordConfirmed = true })
        } else {
            setstate({ ...currentState, ...state.userValidation.isPasswordConfirmed = false })
        }
    }

    const handleChange = (e) => {
        setstate({ ...state, userInfo: { ...state.userInfo, [e.target.name]: e.target.value } });
    }

       const register = async () => {
        const fieldsAreFilled = !Object.values(state.userInfo).includes('');
        const fieldsAreValid = !Object.values(state.userValidation).includes(false);

        if (fieldsAreFilled && fieldsAreValid) {
            const usersFromLocalStorage = localStorage.getItem('users');
            const users = JSON.parse(usersFromLocalStorage) || [];
            const isEmailRegistered = users.find((user) => user.email === state.userInfo.email)

            if (isEmailRegistered) {
                alert('User with this email is already exists. So go fck urself!')
            } else {
                //const newUsers = [...users, state.userInfo]
                //localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
                try {
                    const userPost = await axios.post('http://localhost:3000/users', state.userInfo)
                    console.log(userPost);
                }
                catch (err) {
                    console.log(err);
                }
                //localStorage.setItem('users', JSON.stringify(newUsers));
            }
        }
    }

    return (
        <div>
            <header>
                Register Form
            </header>
            <main>
                <div className="register" id="11">
                    <form>
                        <FormElement
                            errorText="First name is not valid"
                            isFirstNameValid={state.isFirstNameValid}
                            inputName="firstName"
                            isValid={state.userValidation.isFirstNameValid}
                            handleChange={handleChange}
                            text="First Name"
                            validationCheck={validateName}
                        />
                        <FormElement
                            errorText="Last name is not valid"
                            isLastNameValid={state.isLastNameValid}
                            inputName="lastName"
                            isValid={state.userValidation.isLastNameValid}
                            handleChange={handleChange}
                            text="Last Name"
                            validationCheck={validateName}
                        />
                        <FormElement
                            errorText="Address is not valid"
                            isFirstNameValid={state.isAddressValid}
                            inputName="address"
                            isValid={state.userValidation.isAddressValid}
                            handleChange={handleChange}
                            text="Address"
                        />
                        <FormElement
                            errorText="Phone number is not valid"
                            isPhoneValid={state.isPhoneValid}
                            inputName="phone"
                            isValid={state.userValidation.isPhoneValid}
                            handleChange={handleChange}
                            text="Phone"
                            validationCheck={validatePhone}
                        />
                        <FormElement
                            errorText="Email is not valid"
                            isEmailValid={state.isEmailValid}
                            inputName="email"
                            isValid={state.userValidation.isEmailValid}
                            handleChange={handleChange}
                            text="Email"
                            validationCheck={validateEmail}
                        />

                        <FormElement
                            errorText="Password is not valid"
                            isPasswordValid={state.isPasswordValid}
                            inputName="password"
                            isValid={state.userValidation.isPasswordValid}
                            handleChange={handleChange}
                            text="Password"
                            validationCheck={validatePassword}
                            type="password"
                        />

                        <FormElement
                            errorText="Password is not confirmed"
                            isPasswordConfirmed={state.isPasswordConfirmed}
                            inputName="passwordConfirmition"
                            isValid={state.userValidation.isPasswordConfirmed}
                            handleChange={handleChange}
                            text="Confirm Password"
                            validationCheck={validatePasswordConfirmition}
                            type="password"
                        />

                    </form>
                    <button onClick={register}>Register</button>
                </div>
            </main >
        </div >
    )
}
