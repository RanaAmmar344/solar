import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Nabbar() {
  return (
    <>
    <nav className="navbar bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand mx-5">
    <img src={logo} alt="Logo" width="150" height="30" className="d-inline-block align-text-top"/>
    </a>
    

    

<div className='navui'>
  <div>
    <LocalPhoneIcon color='success' /> 03460544380  

  </div  >
  <div className='mx-3'>

     <EmailIcon  color='success' /> ranaammar@gmail.com
  </div>
</div>

    <form className="navcon" role="search">
       
      <button className="btn btn-success text-bold " type="submit">Contact Us</button>
    </form>
  </div>
</nav>
<hr/>
<nav className="navbar navbar-expand-lg navbar-light bg-light  ">
  <div className="container-fluid text-dark">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item  ">
          <Link className="nav-link active text-success " aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/chisiamo">Chi Siamo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/sire" >S.I.R.E</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/sirefeatures">SIRE FEATURES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/sireproduct"> SIRE Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/work"> How it Works?</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page"  to="/contact"> Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>



      
    </>
  )
}

export default Nabbar
