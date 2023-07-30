import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';
import Feed from './Feed';

function Login() {
  return (
    <Router>
        <div>
      <body className="bg-gray">
        <div className="container mt-5 pt-5 d-flex flex-column flex-lg-row justify-content-evenly">
          <div className="text-center text-lg-start mt-0 pt-0 mt-lg-5 pt-lg-5">
            <h1 className="text-primary fw-bold fs-0">flexbook</h1>
            <p className="w-75 mx-auto fs-4 mx-lg-0">
              Flexbook helps you connect and share with the people in your life.
            </p>
          </div>
          <div
            style={{
              maxWidth: '28rem',
              width: '100%',
            }}
          >
            <div className="bg-white shadow rounded p-3 input-group-lg">
              <input
                type="email"
                className="form-control my-3"
                placeholder="Email address or phone number"
              />
              <input
                type="password"
                className="form-control my-3"
                placeholder="Password"
              />
              <Link to="/feed" className="btn btn-primary w-100 my-3">
                Log In
              </Link>
              <Link to="#" className="text-decoration-none text-center">
                <p>Forgotten password?</p>
              </Link>
              {/* <!-- create form --> */}
              <hr />
              <div className="text-center my-4">
                <button
                  className="btn btn-success btn-lg"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#createModal"
                >
                  Create New Account
                </button>
              </div>
              {/* <!-- create modal --> */}
              <div
                className="modal fade"
                id="createModal"
                tabIndex="-1"
                aria-labelledby="createModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    {/* <!-- head --> */}
                    <div className="modal-header">
                      <div>
                        <h2 className="modal-title" id="exampleModalLabel">
                          Sign Up
                        </h2>
                        <span className="text-muted fs-7">
                          It is quick and easy.
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    {/* <!-- body --> */}
                    <div className="modal-body">
                      <form>
                        {/* <!-- names --> */}
                        <div className="row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First name"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Surname"
                            />
                          </div>
                        </div>
                        {/* <!-- email & pass --> */}
                        <input
                          type="email"
                          className="form-control my-3"
                          placeholder="Mobile number or email address"
                        />
                        <input
                          type="password"
                          className="form-control my-3"
                          placeholder="New password"
                        />
                        {/* <!-- DOB --> */}
                        <div className="row my-3">
                          <span className="text-muted fs-7">
                            Date of birth{' '}
                            <i
                              className="fas fa-question-circle"
                              data-bs-toggle="popover"
                              type="button"
                              data-bs-content="And here's some amazing content. It's very engaging. Right?"
                            ></i>
                          </span>
                          <div className="col">
                            <select className="form-select" defaultValue={1}>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="col">
                            <select className="form-select" defaultValue={1}>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="col">
                            <select className="form-select" defaultValue={1}>
                              <option value="1">2023</option>
                              <option value="2">2022</option>
                              <option value="3">2021</option>
                            </select>
                          </div>
                        </div>
                        {/* <!-- gender --> */}
                        <div className="form-check form-check-inline my-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline my-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline my-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                          />
                          <label className="form-check-label" htmlFor="other">
                            Other
                          </label>
                        </div>
                        {/* <!-- submit --> */}
                        <button
                          type="submit"
                          className="btn btn-primary w-100 my-3"
                        >
                          Sign Up
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
            <Route path='/feed'>
                <Feed />
            </Route>
        </Switch>
        
      </body>
        </div>
    </Router>
    
  );
}

export default Login;