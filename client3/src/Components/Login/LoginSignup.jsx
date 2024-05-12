import React from 'react'
import logo from '../Assets/logo.png'
import './login.css'
import vector from '../Assets/vector-110.svg'

const LoginSignup = () => {
  return (
    <div>
		<div id="rectangle_2"  ></div>
		 <img src={vector} alt="" />
      <div className="center">
			{/* Logo design */}
			<div className="logo">
                <img src={logo} alt="loding" />
            </div>

			<form method="get">
				{/* Email/Phone input */}
				<div className="txt_field">
					<input type="text" required />
					<span></span>
					<label>name</label>
				</div>

				{/* Password input */}
				<div className="txt_field">
					<input type="password" required />
					<span></span>
					<label>password</label>
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
