import React, { useState } from "react";
import "./Login.style.css";
import Logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const sighIn = (e) => {
    e.preventDefault();

    //Firebase Login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          history("/");
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const register = (e) => {
    e.preventDefault();

    //Firebase Register
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          history("/");
        }
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={Logo} alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name=""
            id=""
          />

          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name=""
            id=""
          />

          <button type="submit" onClick={sighIn} className="login_signInBtn">
            Sign in
          </button>
        </form>

        <p>By Signing in, You agree our tarms and condition.</p>

        <button onClick={register} className="login_regBtn">
          Create your account
        </button>
      </div>
    </div>
  );
};

export default Login;
