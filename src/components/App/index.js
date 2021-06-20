// == Import npm
import React from 'react';
//import local
import NavBar from 'src/components/NavBar'
// == Import

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
  <NavBar/>
    
    <h1>Composant : App</h1>
  </div>
);

// == Export
export default App;
