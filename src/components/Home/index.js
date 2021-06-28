import React from 'react';
import styled from 'styled-components'
import Name from 'src/components/Name';
import { Card, Icon, Image, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import envolee from 'src/assets/images/image-envolee.png';
import onthespot from 'src/assets/images/image-onthespot.png';
import github from 'src/assets/images/image-githubApp.drawio.png';
import arrowL from 'src/assets/images/arrow-left.drawio.png';
import arrowLong from 'src/assets/images/arrowLong-right.drawio.png';
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
      <div className="divider">
        <Divider />
      </div>
       <div className="block-story">
          <h2 className="the-story">My_Dev_Story</h2>
        </div>
      <div className="block-card">
        
        <div className="block-project">
          <a href="https://www.envoleeverticale.fr/accueil/" target="_blank" rel="noreferrer" >
            <Card className="card-div">
              <Image src={envolee} wrapped ui={false} />
              <Card.Content >
                <Card.Header>Envolée Verticale</Card.Header>
                <Card.Meta>
                  <span className='date'>Avril 2020</span>
                </Card.Meta>
                <Card.Description>
                  <span className="title-card">First Introduction to the website production</span><br/>
                    <ul>
                      <li>Showcase site with CMS Wordpress</li>
                      <li>Production of the specification requirements with the client</li>
                      <li>Development and deployment</li>
                    </ul>
                    <br/>
                  <span className="technos">Technos =&gt;  Wordpress + Elementor</span>
                </Card.Description>
              </Card.Content>
            </Card>
          </a>
        </div>

       {/*  <div id="arrow-one">
          <img src={arrowL} alt="arrow" />
        </div> */}
        <div className="block-project">
          <a href="https://onthespot.link/" target="_blank" rel="noreferrer">
            <Card className="card-div">
              <Image src={onthespot} wrapped ui={false} />
              <Card.Content>
                <Card.Header>OnTheSpot</Card.Header>
                <Card.Meta>
                  <span className='date'>April 2021</span>
                </Card.Meta>
                <Card.Description>
                  <span className="title-card">End of Training Project</span><br/>
                  <ul>
                    <li>Team of 5 developers</li>
                    <li>Project realised from an idea to the deployment step</li>
                    <li>Methodology used: AGILE</li>
                  </ul>
                    <br/>
                    <span className="technos">Technos =&gt; React/Redux + Symfony</span>
                  
                </Card.Description>
              </Card.Content>
            </Card>
          </a>
        </div>{/* 
        <div id="arrow-two">
          <img src={arrowLong} alt="arrow" />
        </div>
 */}
        <div className="block-project">
        <Link to="/ApiGithub">
          <Card className="card-div">
            <Image src={github} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Github Application</Card.Header>
              <Card.Meta>
                <span className='date'>June 2021</span>
              </Card.Meta>
              <Card.Description>
              <ul>
                <li>Idea to provide an application to the gitHub repositories</li>
                <li>use of gitHubAPI </li>
              </ul>
              <br/>
                    <span className="technos">Technos =&gt; React/Redux, Axios</span>
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
