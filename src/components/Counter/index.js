import React from 'react';
import PropTypes from 'prop-types';
import './counter.scss';

const Counter = ({ nbrRepos }) => (
  <div className="container-input">

    <p>La recherche a donné {nbrRepos} résultats</p>

  </div>

);

Counter.propTypes = {
  nbrRepos: PropTypes.number.isRequired,

};
export default Counter;
