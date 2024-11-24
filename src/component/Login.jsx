import React from 'react';
import './index.css'

const Login = () => {
  return (
   <>
    <div className="container">
      <div className="left">
        <h1 className="title">Welcome Back 👋</h1>
        <p className="subtitle">Today is a new day. It's your day. You shape it.</p>
        <p className="subtitle">Sign in to start ordering.</p>

        <form className="form">
          <input
            type="email"
            placeholder="Example@email.com"
            className="input"
          />
          <input
            type="password"
            placeholder="At least 8 characters"
            className="input"
          />
          <button type="submit" className="button">Sign in</button>
        </form>

        <p className="signupText">
          Don’t you have an account? <a href="#signup" className="link">Sign up</a>
        </p>
      </div>

      <div className="right">
        <img
          src="/path-to-your-image/burger-food.jpg"
          alt="Delicious food"
          className="image"
        />
      </div>

      <footer className="footer">
        <p>© Order.UK Copyright 2024. All Rights Reserved.</p>
        <div>
          <a href="#terms" className="footerLink">Terms</a>
          <a href="#privacy" className="footerLink">Privacy</a>
        </div>
      </footer>
    </div>
   </>
  );
};

export default Login;
