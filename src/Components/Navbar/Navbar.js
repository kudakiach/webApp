import React, { Component } from 'react'


const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" id="navLogo" href="index.php">Luca&apos;s Loaves</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li className="nav-item ps-5 py-2">
                <a className="nav-link " href="/">Home</a>
              </li>
              <li className="nav-item ps-5 py-2">
                <a className="nav-link" href="breadMakingclassName.php">Bread Making className</a>
              </li>
              <li className="nav-item ps-5 py-2">
                <a className="nav-link" href="">Careers</a>
              </li>
              <li className="nav-item ps-5 py-2">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item ps-5 py-2">
                <a className="nav-link" href="contact.php">Contact</a>
              </li></ul>
                </div>
        </div>
      </nav>
    )
}
export default Navbar;
  
    
    

    
 