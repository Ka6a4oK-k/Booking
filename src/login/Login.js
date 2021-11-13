import './login.css';

export default function Login(){
    
    return (
        <div className='login'>
            <p>Sign in</p>
            <div className= 'login_form-element'>
                <span>Email</span>
                <input type="text" />
            </div>
            <div className= 'login_form-element'>
                <span>Password</span>
                <input type="text" />
            </div>
            <button>Sign in</button>
        </div>
    )
}