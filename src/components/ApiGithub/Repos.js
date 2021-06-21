import React from 'react';
import PropTypes from 'prop-types';

import { Card, Icon, Image } from 'semantic-ui-react';


const Repos = ({

  name,
  description,
  owner,
  url,
}) => (
  <a href={url} className="repo">
    <Card>
      <Image src={owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{owner.login}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
        </a>
      </Card.Content>
    </Card>
  </a>
);

Repos.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

// on donne des valeurs par défaut pour les props facultatives
Repos.defaultProps = {
  description: '',
};

export default Repos;
