import React, { useState } from "react";
import Link from "next/link";
// import validator from "validator";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "@/helpers/message";
import { showLoading } from "@/helpers/loading";

const register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg:'',
      errorMsg:'',
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(formData);
    // Validation
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All Fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: "Password do not Match",
      });
    }
    else{
      setFormData({
        ...formData,
        successMsg:"Validation Success"
      })
    }
  };
  return (
    <div className="signup-box">
      <div className="container">
        <div className="row">
          <div className="form-box">
            <div className="col-md-6 col-8">
              <h2 className="">Registration Form</h2>
              {successMsg && showSuccessMsg(successMsg)}
              {errorMsg && showErrorMsg(errorMsg)}
              {loading && (<div className="text-center pb-4">{showLoading()}</div>)}
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputfirstname"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="confirm-password"
                    className="form-control"
                    id="exampleInputPassword"
                    name="password2"
                    value={password2}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary sign-up-btn"
                  name="create"
                >
                  Sign up
                </button>
                <p className="login-link">
                  Have an accout?{" "}
                  <span>
                    <Link href="sign-in">Sign In</Link>{" "}
                  </span>
                </p>
              </form>
              {JSON.stringify(formData)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
