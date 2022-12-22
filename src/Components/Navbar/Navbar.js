import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" id="navLogo" href="/">Luca&apos;s Loaves</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/"></Link> */}
                </div>
        </div>
      </nav>
    )
}
export default Navbar;
  
    
    

    
 