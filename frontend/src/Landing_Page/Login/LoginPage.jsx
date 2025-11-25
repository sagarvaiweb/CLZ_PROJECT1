import React, { useState } from 'react'

function LoginPage() {
    const [form , setForm] = useState({email:"" , password:""});

    const [showPassword , setShowPassword] = useState(false);

    const handleChange = (e)=>{
        setForm({...form , [e.target.name]: e.target.value});
    }

    const handleSubmit = (e)=>{

    }
    return (<div className='loginPage signupPage'> 
    <div className='cardWrapper'>
        <div className="card">
        <h2 className="title">Login</h2>

      <form onSubmit={handleSubmit}>

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
          Login
        </button>

      </form>

    </div>
    </div>
    </div>    );
}

export default LoginPage;