// import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clientRegister } from "../../Axios/Actions/HomeActions";
import Navbar from "../Navbar/Navbar";
import { basicSchema } from "../Schemas";
// import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const onSubmit = async (values, actions) => {
    console.log("message");
    const status = await clientRegister(values);
    if (status.status) {
      console.log(status);
      navigate("/login");
      toast.success('sign in completed')
    } else {
      console.log(status);
      seterror(status.error);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: "",
        email: "",
        phonenumber: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="home" >
      <Navbar />
      <div>
      <div className="wrapper">
        <div className="title">Sign Up</div>
        {error ? <p className="signup-error">{error}</p> : ""}
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form">
            <div className="inputfield">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                className={
                  errors.name && touched.name ? "input-error" : "input"
                }
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
              />
            </div>
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
            <div className="inputfield">
              <label>Password</label>
              <input
                type="password"
                className={
                  errors.password && touched.password ? "input-error" : "input"
                }
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
              />
            </div>
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}
            <div className="inputfield">
              <label>Confirm Password</label>
              <input
                type="password"
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : "input"
                }
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
            <div className="inputfield">
              <label>Gender</label>
              <div className="custom_select">
                <select
                  className={
                    errors.gender && touched.gender
                      ? "custom_select"
                      : "custom_select-error"
                  }
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option disabled>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="inputfield">
              <label>Date-of-Birth</label>
              <input
                type="date"
                className={errors.dob && touched.dob ? "input-error" : "input"}
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                name="dob"
              />
            </div>
            {errors.dob && touched.dob && <p className="error">{errors.dob}</p>}
            <div className="inputfield">
              <label>Email Address</label>
              <input
                type="text"
                className={
                  errors.email && touched.email ? "input-error" : "input"
                }
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
              />
            </div>
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
            <div className="inputfield">
              <label>Phone Number</label>
              <input
                type="number"
                className={
                  errors.phonenumber && touched.phonenumber
                    ? "input-error"
                    : "input"
                }
                value={values.phonenumber}
                onChange={handleChange}
                onBlur={handleBlur}
                id="phonenumber"
              />
            </div>
            {errors.phonenumber && touched.phonenumber && (
              <p className="error">{errors.phonenumber}</p>
            )}

            {/* <div className="inputfield">
            <label>Address</label>
            <textarea className="textarea" value={values.address} onChange={handleChange} onBlur={handleBlur} id="address" />
          </div> */}

            <div className="inputfield">
              <button type="submit" className="btn btn-primary inp" id="button">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Signup;
