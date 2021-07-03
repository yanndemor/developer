import React from 'react';
import Iframe from 'react-iframe';
import { useParams } from 'react-router-dom';

// == Import : local
import { getCamBySlug } from 'src/utils';

const Cam = ({ camList }) => {
 console.log(camList);
  const { slug } = useParams();

 
  const cam = getCamBySlug(slug, camList);
console.log(cam);
  return (
    <div>
      <Iframe url={cam.player.day.embed}
        width="450px"
        height="450px"
        id={cam.id}
        className="myClassname"
       
      />
    </div>
  );
};
export default Cam;
