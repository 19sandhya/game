import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="loginsignup">
      <h1>Sign Up</h1>
      <div className="login-fields">
        <input type="text" placeholder="Your Name" class="inp" />
        <input type="email" placeholder="Your Email" class="inp" />
        {/* <intput type="email" placeholder="Email Adrress" /> */}
        <input type="password" placeholder="Password" class="inp" />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">
        Already have an acount? <span>Login here</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="box" />
        <p>By Continuing, I agree to the terms of use & privacy policy</p>
      </div>
    </div>
  );
};

export default Login;
