import React, { useState,useRef } from 'react';

export default function Login ({ setLoginStatus }) {
    const usernameRef = useRef('');
    const passwordRef = useRef('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Controleer de ingevoerde waarden met gebruikersgegevens
      if (usernameRef.current.value === 'Manager' && passwordRef.current.value === '1234') {
        setLoginStatus(true);
      } else {
        setMessage(<div className='alert alert-danger'>Invalid email or password.</div>);
      }
    };
  
    return (
      <div id='LoginBox' className='container mt-5'>
        {message}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className='mt-3'>Username:</label>
            <input className='form-control mt-3' type="text" id="Username" ref={usernameRef} />
          </div>
          <div>
            <label htmlFor="password" className='mt-3'>Password:</label>
            <input className='form-control mt-3' type="password" id="password" ref={passwordRef} />
          </div>
          <button type="submit" className='btn btn-danger w-100 mt-3'>Login</button>
        </form>
      </div>
    );
  };