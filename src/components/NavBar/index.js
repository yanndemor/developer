import React from 'react';
import reactLogo from 'src/components/App/react-logo.svg';
import './navbar.scss';

// == Composant
const NavBar = () => (
  <div className="topNav">
 {/* <!-- Navbar --> */}
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
    {/*   <!-- Container wrapper --> */}
      <div className="container-fluid">
      <img src={reactLogo} alt="react logo" />
      <h1>YannDemor DeveloPunk</h1>
      <em></em>
       {/*  <!-- Collapsible wrapper --> */}
        <div className="collapse d-flex flex-row justify-content-end navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav  d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" aria-current="page" href="#!">
                <div>
                  <i className="fas fa-home fa-lg mb-1"></i>
                </div>
                Home
              </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="#!">
                Link
              </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" aria-disabled="true" href="#!">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown text-center mx-2 mx-lg-1">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
            {/*   <!-- Dropdown menu --> */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <!-- Left links --> */}

          {/* <!-- Search form --> */}
          <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
            <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-white" type="button" data-mdb-ripple-color="dark">
              Search
            </button>
          </form>
        </div>
       {/*  <!-- Collapsible wrapper --> */}
      </div>
     {/*  <!-- Container wrapper --> */}
    </nav>
{/* <!-- Navbar --> */}
  </div>
);

// == Export
export default NavBar;
