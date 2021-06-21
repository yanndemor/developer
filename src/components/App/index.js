// == Import npm
import React from 'react';
// import local
import NavBar from 'src/components/NavBar';
import Header from 'src/components/Header';
import Page from 'src/containers/Page';
import { BrowserRouter as Router } from 'react-router-dom';
// == Import

import './styles.css';

// == Composant
const App = () => (

  <div className="app">
    <Router>
      <NavBar />

      <Header />
      <Page />
    </Router>
  </div>

);

// == Export
export default App;
