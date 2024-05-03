import React from 'react'
import './login.css'

import logo from '/Users/vivekanandshridhardeshinge/chapristoreV1/client/src/Components/Assets/logo.png'
const LoginSignup = () => {
  return (
    <div>
      <div className="center">
			{/* Logo design */}
			<div className="logo">
      <img src={logo} alt="" />
			</div>

			<form method="post">
				{/* Email/Phone input */}
				<div className="txt_field">
					<input type="text" required />
					<span></span>
					<label>Email or Phone number</label>
				</div>

				{/* Password input */}
				<div className="txt_field">
					<input type="password" required />
					<span></span>
					<label>Password</label>
				</div>

				{/* Forgot Password link */}
				<div className="pass">Forgot Password?</div>

				{/* Login button */}
				<input type="submit" value="Login" />

				{/* Signup link */}
				<div className="signup_link">
					<a href="signup.html">Create a new account</a>
				</div>
			</form>
    </div>
  


		
		</div>
	)
}

export default LoginSignup
