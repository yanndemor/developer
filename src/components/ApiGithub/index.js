// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import Repos from './Repos';

// == Import

import './apiGithub.scss';

// == Composant
const ApiGithub = ({

  githubList,
}) => (
  <Card.Group itemsPerRow={3}>
    {githubList.map((repos) => (
      <Repos
        key={repos.id}
        {...repos}
      />
    ))}
  </Card.Group>

);

ApiGithub.propTypes = {
  // tableau d'objets
  // chaque objet a les propriétés :
  // - id, name, description (number/string)
  // - owner (objet)
  // l'objet owner a deux propriétés : login, avatar_url
  githubList: PropTypes.arrayOf(
    PropTypes.shape({
      // on valide seulement les informations dont on se sert dans ce composant
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default ApiGithub;
