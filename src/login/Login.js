import './login.css';
import IsAuthenticatedContext from '../contexts/isAuthenticated';
import AuthenticatedUserContext from '../contexts/authenticatedUser';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';

export default function Login(props) {
    let navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(IsAuthenticatedContext)
    const { authenticatedUser, setAuthenticatedUser } = useContext(AuthenticatedUserContext)
    //console.log('isAuthenticated', isAuthenticated);
    //console.log('authenticatedUser', authenticatedUser);


    const login = () => {
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const usersFromJSON = axios.get(`http://localhost:3000/users?email=${email}&password=${pass}`)
            .then(result => {
                const isEmailRegistered = result.data.find(user => user.email === email)
                if (isEmailRegistered) {
                    if (isEmailRegistered.password === pass) {
                        const authenticatedUser = JSON.stringify(isEmailRegistered)
                        localStorage.setItem('authenticatedUser', authenticatedUser)
                        setIsAuthenticated(!!authenticatedUser)
                        setAuthenticatedUser(authenticatedUser)
                        navigate('/')
                    } else {
                        alert('User or password is not correct')
                    }
                } else {
                    alert('User or password is not correct')
                }
            })
    }

    return (
        <div className='login'>
            <p>Sign in</p>
            <div className='login_form-element'>
                <span>Email</span>
                <input type="text"
                    id="email" />
            </div>
            <div className='login_form-element'>
                <span>Password</span>
                <input type="password"
                    id="password" />
            </div>
            <button onClick={login}>Sign in</button>
        </div>
    )
}