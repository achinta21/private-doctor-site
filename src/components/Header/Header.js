import React from 'react';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const{user,logOut}=useAuth();
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid">
    <Link className="navbar-brand fw-bold ms-5 fs-2 text-white" to="/top-hospital">HOSPITAL</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end me-5"id="navbarTogglerDemo01">
      <ul className="navbar-nav fs-5">
        <li className="nav-item">
          <Link className="nav-link active fw-bold me-4" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold me-4" to="/servies">Servies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold me-4" to="/appointment">Appointment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold me-4" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" to="/login">{user?.displayName}</Link>
        </li>
        {user?.email?
          <Button onClick={logOut} className="btn">logOut</Button>:
          <Link className="nav-link active fw-bold me-4" to="/login">login</Link>
          }
      </ul>
    </div>
  </div>
</nav>
</div>
    );
};

export default Header;