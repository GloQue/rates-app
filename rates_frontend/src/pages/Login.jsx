import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";


const Login = () => {
  return (
    <>
        <div className='login_form_container'>
          <h3>Log in to your account</h3>

          <form action="" className='login_form'>
            <div className='email_container'>
              <label htmlFor="userEmail">Email</label>
              <input type="email" id='userEmail' placeholder='Enter your email'/>
            </div>
            <div className='password_container'>
              <label htmlFor="userPassword">Password</label>
              <input type="password" id='userPassword' placeholder='Enter your password'/>
              <FaEye className='eye'/>
            </div>
            <p>Forgot Password?</p>

            <div className='login_button'>
              <button>Login</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default Login