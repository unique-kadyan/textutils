import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(props) {
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} style= {
        {backgroundColor : props.Mode === 'light' ? 'dark' : 'light',
        color:props.Mode === 'light' ? 'black' : 'white',
}
      }>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TextAction</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Set Dark Mode Here</label>
</div>
    </div>
  </div>
</nav>

    </>
  );
}
