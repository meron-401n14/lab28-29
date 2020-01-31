import React, { useState } from 'react';
import { connect } from 'react-redux';
import { attemptLogin } from '../store/authReducer';

function Login(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();
    props.dispatch(attemptLogin(email, password));
  };

  return (
    <div style={{ backgroundColor: "#660c64"}}>
      <form onSubmit={login}>
        <h1 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>Login</h1>
        <label>
          Email:{' '}
          <input
            type='text'
            placeholder="Email Address" 
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password:{' '}
          <input
            type='text'
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default connect()(Login);