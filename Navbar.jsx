import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const Navbar =()=>{
     return(
       <>
<nav 
className="navbar navbar-expand-lg navbar-light ">
  <div 
  className="container">
    <NavLink 
    className="navbar-brand"
     to="/">
       Digital Developer
     </NavLink>
    <button
     className="navbar-toggler" 
     type="button"
      data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
       aria-expanded="false"
        aria-label="Toggle navigation">
      <span 
      className="navbar-toggler-icon">

      </span>
    </button>
    <div
     className="collapse navbar-collapse" 
     id="navbarSupportedContent">
      <ul
       className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li
         className="nav-item">
          <NavLink 
          exact
          
           className="nav-link"  
           aria-current="page"
            to="/">
             Home
             </NavLink>
        </li>
        <li
         className="nav-item">
          <NavLink 
          activeClassName="menue_style"
          className="nav-link" 
          to="/service">
            Services
            </NavLink>
        </li>
        <li
        
         className="nav-item">
          <NavLink
          activeClassName="menue_style"
           className="nav-link" 
           to="/about">
             About Us
             </NavLink>
        </li>
        <li
         className="nav-item">
          <NavLink 
          activeClassName="menue_style"
          className="nav-link"
           to="/contact">
             Contact Us
             </NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
            </>
   );
};
export default Navbar;