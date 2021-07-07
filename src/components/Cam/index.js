import React from 'react';
import Iframe from 'react-iframe';
import { useParams } from 'react-router-dom';
import { Eye, Info } from 'react-feather';

// == Import : local
import { getCamBySlug } from 'src/utils';
import './cam.scss';
const Cam = ({ camList }) => {
 console.log(camList);
  const { slug } = useParams();

 
  const cam = getCamBySlug(slug, camList);
console.log(cam);
  return (
    <>
      <div className="container-title">
        <h1>Webcam {cam.title}</h1> 
     </div> 
      <div className="message">
        <div id="alert">
          <Eye width="50" height="50"/>
          </div>
        <div className="info">
          <p className="text"> You can access the live cam using the <strong>source link </strong> provider by the <Info 
          fill="grey" 
         /> icon !!!</p>
        </div>
      </div>
     
      <div className="container-singlecam">
        <Iframe url={cam.player.day.embed}
          width="600px"
          height="600px"
          id={cam.id}
          className="myClassname"
        
        />
      </div>
    </>
  );
};
export default Cam;
