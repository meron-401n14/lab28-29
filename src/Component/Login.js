import React, { useState } from 'react';
import { connect } from 'react-redux';
import { attemptLogin } from '../store/authReducer';
import './Styles/index.scss'

function Login(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();
    props.dispatch(attemptLogin(email, password));
  };

  return (
    <div>
      <form onSubmit={login} id="loginForm">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">

        <h3>Login</h3>
            </div>
            <div className="group-form">
        <label for="exampleInputEmail"  className="lab">Email address </label>
          <input
            type='text'
            className="form-control"
            id="exampleInputEmail"
            placeholder="Enter email" 
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        
        </div>
        <div className="form-group">
        <label for="exampleInputPassword" className="lab">Password</label>
         
          <input
            type='text'
            id="exampleInputPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        
        </div>
        <button className="btn btn-primary btn-block">Submit</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default connect()(Login);