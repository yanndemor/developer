import React from 'react';

import SkillsTabs from 'src/components/Skills/SkillsTabs';


import './skills.scss';
const Skills = ({ }) => {
 
 

  return (
    <>

      <div className="block-skills-presentation">
        <div className="container-title">
          <h1>Yann_Dev_Skills</h1> 
        </div> 
        
        <div>
          <SkillsTabs/>
        </div>
      </div>
      
    
    </>
  );
};

Skills.propTypes = {


};
export default Skills;
