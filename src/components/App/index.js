// == Import npm
import React from 'react';
//import local
import NavBar from 'src/components/NavBar'
import Header from 'src/components/Header'
// == Import

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
  <NavBar/>
    
   <Header/> 
  </div>
);

// == Export
export default App;
