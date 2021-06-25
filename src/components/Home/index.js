import React from 'react';
import styled from 'styled-components'
import Name from 'src/components/Name';
import { Card, Icon, Image, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import envolee from 'src/assets/images/image-envolee.png';
import onthespot from 'src/assets/images/image-onthespot.png';
import './home.scss';
const Home = ({ }) => {


  return (
    <>

      <div className="block-name">
        <div className="name">
          <h2>
            <span><Name /></span>
          </h2>
        </div>
      </div>
<Divider />
      <div className="block-card">
        <div>
          <a href="https://www.envoleeverticale.fr/accueil/" target="_blank" rel="noreferrer" >
            <Card className="card-div">
              <Image src={envolee} wrapped ui={false} />
              <Card.Content >
                <Card.Header>Envolée Verticale</Card.Header>
                <Card.Meta>
                  <span className='date'>Avril 2021</span>
                </Card.Meta>
                <Card.Description>
                  <span className="title-card">1ére introduction à la réalisation de site web</span><br/>
                    <ul>
                      <li>Site Vitrine réalisé avec wordpress</li>
                      <li>Rédaction du cahier des charges avec le client</li>
                      <li>développement et mise en production</li>
                    </ul>
                  <span className="technos">=&gt;  Wordpress + Elementor</span>
                </Card.Description>
              </Card.Content>
            </Card>
          </a>
        </div>

        <div>
          <a href="https://onthespot.link/" target="_blank" rel="noreferrer">
            <Card className="card-div">
              <Image src={onthespot} wrapped ui={false} />
              <Card.Content>
                <Card.Header>OnTheSpot</Card.Header>
                <Card.Meta>
                  <span className='date'>April 2020</span>
                </Card.Meta>
                <Card.Description>
                  <span className="title-card">Projet de fin de formation</span><br/>
                  <ul>
                    <li>Equipe de 5 developpers</li>
                    <li>Projet réalisé à partir d'une idée vers la mise en production</li>
                    <span className="technos">=&gt; React/Redux + Symfony</span>
                  </ul>
                  
                  <br/>

                </Card.Description>
              </Card.Content>
            </Card>
          </a>
        </div>

        <div>
        <Link to="/ApiGithub">
          <Card className="card-div">
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
          </Link>
        </div>
      </div>
      
    
    </>
  );
};

Home.propTypes = {


};
export default Home;
