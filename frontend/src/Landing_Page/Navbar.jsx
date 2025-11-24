import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/" ><img className='Roomly_icon'  src="/roomly1.svg" alt="Roomly_icon" /></Link>
     
     
     <form className="d-flex search_bar" role="search">
      <input className="form-control me-2 search_input" type="search" placeholder="What are you looking ?" aria-label="Search"/>
      <button className="btn btn-outline-primary search_btn" type="submit">Search</button>
    </form>
    
    
    <div className="collapse navbar-collapse ms-auto " id="navbarNav">
      <ul className="navbar-nav ms-auto gap-5">
        <li className="nav-item">
          <Link className="nav-link active" to="/about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/services" >Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup"  >SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login"  >Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/support"  >Support</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to="/logout">Logout</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
     );
}

export default Navbar;