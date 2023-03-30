import React from "react";
import Link from "next/link";

const register = () => {
  return (
    <div className="signup-box">
      <div className="container">
        <div className="row">
          <div className="form-box">
            <div className="col-md-6 col-8">
              <h2 className="">Registration Form</h2>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputfirstname"
                    name="username"
                    placeholder="Username"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="confirm-password"
                    className="form-control"
                    id="exampleInputPassword"
                    name="confirm-password"
                    placeholder="Confirm Password"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
