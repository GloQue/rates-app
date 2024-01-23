import { Form, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaEye } from "react-icons/fa";


const Signup = () => {

  return (
    <>
      <div className='login_form_container'>
        <h3>Create an account</h3>

        <Form action="" className='login_form'>
          <div className='name_container'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' placeholder='Enter your name' />
          </div>
          <div className='name_container'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' placeholder='Enter your email'/>
          </div> 
          <div className='password_container'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Enter your password' name='password'/>
            <FaEye className='eye'/>
          </div>
          <p>Forgot Password?</p>

          <div className='login_button'>
            <button type='submit'>Create an account</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Signup