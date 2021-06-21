import React from 'react';
// import yarn
import reactLogo from 'src/components/App/react-logo.svg';
import './navbar.scss';
// import Local
import github from 'src/assets/images/githubWhite.svg';
import linkedIn from 'src/assets/images/linkedinWhite.svg';
// import librairies
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
// == Composant
const NavBar = () => {
  return(
 
 <div className="container-fluid'">
    <Navbar className="gradient-custom" expand="lg"  variant="dark" >
    
      <div className="container-fluid navbar">
     
        <div className="image-header">
          <a href="https://github.com/yanndemor/">
          <img className="image-github" src={github} alt="logo github"/></a>
          <a href="https://www.linkedin.com/in/yann-demor">
          <img className="image-linkedin" src={linkedIn} alt="logo linkedin"/></a>
        </div>  
        <h1 className="title-nav">YannDev Porte-Folio</h1>

            <Navbar.Toggle className="burger ml-auto " backgroud-color="white-bold" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-dark" />
            </Navbar.Toggle>

          <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-end">
            <Nav className="mr-auto">
              <NavLink to=""  className="navbar-brand">Features </NavLink>
            </Nav>
          </Navbar.Collapse>
       
      </div>
    </Navbar>
    
 </div>
  );
};

// == Export
export default NavBar;
