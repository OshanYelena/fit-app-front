import PropTypes from 'prop-types';
import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
//import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { instructorLogin } from '../actions/auth';
import './main.css';
import axiois from 'axios'


const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}


const Login_I = ({ instructorLogin, isAuthenticated }) => {

  const [user, setUser] = useState(initialState)

  
  const {email, password, err, success}= user

  const handleChangeInput = e => {
      const {name, value} = e.target
      setUser({...user, [name]:value, err:'',success: ''})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    instructorLogin(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
        <section>
      <div className="container w-75 my-5 shadow">
        <div className="row align-items-stretch">
          <div className="col bg-white">
            <div className="text-center pt-3">
              <Link to="/" className="login__logo">
                FITUS
              </Link>
            </div>
            <h2 className="fs-4 title text-center py-4">login as a Instructor</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-3 py-4">
                <label className="form-label fs-5 contact-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fs-5 contact-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div className="text-end py-2">
                <a href="/" className="fs-6 login__forget">
                  Forgot the Password?
                </a>
              </div>
              <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                <button type="submit" className="btn login__btn btn-primary">
                  login
                </button>
              </div>
            </form>
            <div className="text-center d-grid gap-2 col-6 mx-auto py-4">
              <Link to="/instructor/register" className="fs-6 login__register">
                Create an account
                <FaArrowRight className="ps-2 fs-4" />
              </Link>
            </div>
          </div>
          <div className="col login__bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 login"></div>
        </div>
      </div>
    </section>
  );
};

Login_I.prototype = {
    login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps,{instructorLogin})(Login_I);