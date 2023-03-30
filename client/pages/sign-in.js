import React from "react";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="signup-box">
      <div className="container">
        <div className="row">
          <div className="form-box">
            <div className="col-md-6 col-8">
              <h2 className="">Sign In</h2>
              <form>
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
                
                <button
                  type="submit"
                  className="btn btn-primary sign-up-btn"
                  name="create"
                >
                  Sign In
                </button>
                <p className="login-link">
                  Don't have an accout?{" "}
                  <span>
                    <Link href="register">Sign Up Here</Link>{" "}
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

export default SignIn;
