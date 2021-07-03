// == Import npm
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import { slugifyTitle } from 'src/utils';
import './apiwindy.scss';
import { Card, Image } from 'semantic-ui-react';
// == Composant
const ApiWindy = ({ loadCategory, camList }) => {
  useEffect(() => {
    loadCategory();
  }, []); console.log(camList);
  return (
    <>
    <div className="container-title">
     <div>
        <h1>Api Windy Webcam</h1> 
     </div> 
    </div>
    <div className="container-cam">
     
     
       
     <Card.Group id="card-row" itemsPerRow={2} >  
      {
        camList.map((cam)=>(
       
        
          
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
