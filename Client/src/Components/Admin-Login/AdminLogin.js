import React from 'react'
// import { Link, useNavigate } from "react-router-dom";


export default function AdminLogin() {
  return (
    <>
    <div className="cont1">
    <div className="wrapper">
      <div className="title">LOGIN</div>
      <form>
        <div className="form">
          <div className="inputfield">
            <label htmlFor="name">Phone number</label>
            <input
              type="text"
              className="input form-control"
              value=''
              
              placeholder="Phonenumber, username or email"
            />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input
              type="password"
              className="input form-control"
              value=''
              placeholder="Password"
            />
          </div>
          <div className="inputfield">
            <button type="submit" className="btn btn-primary inp" id="button">
              Log in
            </button>
          </div>
          {/* <div class="container2">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
            {error ? (
              <p className="signup-error" style={{ margin: 0 }}>
                {error}
              </p>
            ) : (
              ""
            )}
          </div> */}
        </div>
      </form>
    </div>
    </div>
  </>
  )
}
