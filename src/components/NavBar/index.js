import React from 'react';
// import yarn
import './navbar.scss';
// import Local
import github from 'src/assets/images/githubWhite.svg';
import linkedIn from 'src/assets/images/linkedinWhite.svg';
// import librairies
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import picture from 'src/assets/images/image-moi.png'
import { NavLink } from 'react-router-dom';
// == Composant
const NavBar = () => (

  <div className="container-fluid px-0 ">
    <Navbar className="gradient-custom" expand="lg" variant="dark">

      <div className="container-fluid navbar">

        <div className="image-header">
          <div>

            <a href="https://github.com/yanndemor/" target="_blank" rel="noreferrer" tool-tips="It's Sample tooltip">
              <img className="image-github" src={github} alt="logo github" />
              <em className="account">GitHub Account</em>
            </a>

          </div>
          <div>
            <a href="https://www.linkedin.com/in/yann-demor" target="_blank" rel="noreferrer">
              <img className="image-linkedin" src={linkedIn} alt="logo linkedin" />
              <em className="account">LinkedIn Account</em>
            </a>
          </div>
          
        </div>
        <div className="image-moi">
          <img  id="image-moi" src={picture} alt="image de moi" />
        </div>
        
        <div>
        
          <h1 className="title-nav">YannDev PortFolio</h1>
        </div>
        

        <Navbar.Toggle className="burger ml-auto " backgroud-color="white-bold" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-dark" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-end burger-menu">
          <Nav className="mr-auto">
            <NavLink to="/" className="navbar-brand" exact>Home</NavLink>
          </Nav>
          <Nav className="mr-auto">
            <NavLink to="/contact" className="navbar-brand" exact>Contact</NavLink>
          </Nav>
          <Nav className="mr-auto">
            <NavLink to="/competences" className="navbar-brand" exact>Skills</NavLink>
          </Nav>
          <Nav className="mr-auto">
            <NavLink to="/ApiGithub" className="navbar-brand" exact>Application Github</NavLink>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>

  </div>
);

// == Export
export default NavBar;
