import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { clientLogin } from "../../Axios/Actions/HomeActions";
import jwt from "jwt-decode";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  async function dologin(event) {
    event.preventDefault();
    // console.log('processing');

    const values = { phone: phone, password: password };
    const data = await clientLogin(values);
    console.log(data);

    if (data.user) {
      localStorage.setItem('token', data.user)
      const user = jwt(data.user);
      console.log(user);
      localStorage.setItem('userDetails', user.name);
      console.log(user.name);
      navigate("/client-home");
      toast.success('Logged in successfully')
    } else {
      seterror("Invalid Phone Number/Password..");
      toast.error("Invalid Phone Number/Password..")
    }
  }

  return (
    <>
      <Navbar />
      <div className="cont1 home ">
        <div className="wrapper">
          <div className="title">LOGIN</div>
          <form onSubmit={dologin}>
            <div className="form">
              <div className="inputfield">
                <label htmlFor="name">Phone number</label>
                <input
                  type="text"
                  className="input form-control"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Phonenumber, username or email"
                />
              </div>
              <div className="inputfield">
                <label>Password</label>
                <input
                  type="password"
                  className="input form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </div>
              <div className="inputfield">
                <button
                  type="submit"
                  className="btn btn-primary inp"
                  id="button"
                >
                  Log in
                </button>
              </div>
              <div class="container2">
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
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <div class="container">
      <div class="container1">
        <div class="img1">
          <h3>LOGIN</h3>
        </div>
        <form onSubmit={dologin} >
        <div className="inpMain">
          <div className="inp">
            <label className="label" >Phonenumber</label>
            <input class="form-control" type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phonenumber, username or email"/>
          </div>
          <div className="inp">
            <label className="label">Password</label>
            <input class="form-control" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
          </div>
        <div>
        <button type="submit" class="btn btn-primary inp" id="button">
            Login
          </button>
          {error ? <p className="signup-error" style={{margin:0}} >{error}</p> : ""}
        </div>
        </div>
        </form>
      </div>
      <div class="container2">
        <p>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </div>
    </div> */}
    </>
  );
}

export default Login;
