import React from 'react'
import { useState } from 'react';

function SignUpPage() {

     const [form , setForm] = useState({username:"", email:"",password:""}) ;

     const [showPassword , setShowPassword] = useState(false) ;

     const handleChange = (e)=>{
        setForm({...form , [e.target.name]: e.target.value }) ;
     }

     const handleSubmit = (e)=>{

     }

    return ( 
    <div className='signupPage'> 
    <div className='cardWrapper'>
        <div className="card">
        <h2 className="title">SignUp</h2>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="input-box">
          <i className="fa-solid fa-user icon"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="input-box">
          <i className="fa-solid fa-envelope icon"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="input-box">
          <i className="fa-solid fa-lock icon"></i>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* Show / Hide Password */}
          <i
            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} eye-icon`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>

        <button className="btn btn-form" type="submit">
          Sign Up
        </button>

        <p className="subtext">
          By signing up, you agree to our{" "}
          <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>

        <p className="links">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="login-link">
            Login
          </span>
        </p>
      </form>

    </div>
    </div>
    </div>   

     );
}

export default SignUpPage;