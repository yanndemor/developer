// == Import npm
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import { slugifyTitle } from 'src/utils';
import './apiwindy.scss';
import { Card, Image } from 'semantic-ui-react';

import guillemet1 from 'src/assets/images/guillemets 1.png';
import guillemet2 from 'src/assets/images/guillemets 2.png';
// == Composant
const ApiWindy = ({ loadCategory, camList }) => {
  useEffect(() => {
    loadCategory();
  }, []); console.log(camList);
  return (
    <>
    <div className="container-presentation-windy">
     <div className="container-title">
        <h1>Api Windy Webcam</h1> 
     </div> 
     <div className="block-description">
          <div className="windy-guillemet1">
              <img  src={guillemet1} alt="guillemets" />
          </div>
          <div className="description-api">
            <h3>Reach one of the following webcams listed below</h3>
          </div>   
          <div className="windy-guillemet2">
            <img src={guillemet2} alt="guillemets" />
          </div>
      </div>
      <div className="description-windy">
        <h4 className="description">Description:</h4>
        <p className="paragraphe-description">In this project, I have used an API request on <a href="https://api.windy.com/" className="link">WindyApi</a>, permitting to collect a list of webcams available all around the world, I have selected a few one présented here <strong>click on the webcam's name</strong> to watch it!
        </p>
        <p> This projet is produced using the library javascript React and
          Redux to manage the request API and the datas to the differents React's components!
        </p>

    </div>
    </div>
    <div className="container-cam">
     
     <Card.Group id="card-row" itemsPerRow={2} >  
      {camList.map((cam)=>(

            <Card id="container-card" key={cam.id}>
            
              <Image src={cam.image.current.thumbnail} wrapped ui={false} />
              <Card.Content>
              <Link to={`/apiWindy/${slugifyTitle(cam.title)}`}>  
                <Card.Meta>
                  <span className="name">{cam.title}</span>
                </Card.Meta>
               </Link>
              </Card.Content>
              
            </Card>
          
       
        ))
      }
         
     </Card.Group> 
    </div>
    </>
  );
};

ApiWindy.propTypes = {
  loadCategory: PropTypes.func.isRequired,
  camList: PropTypes.array.isRequired,
};
export default ApiWindy;
