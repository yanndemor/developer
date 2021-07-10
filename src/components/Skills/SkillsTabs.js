import React from 'react';
import { Tab,  Grid } from 'semantic-ui-react';
import ProfessionnalT from 'src/components/Skills/ProfessionnalT';
import DeveloperSkills from 'src/components/Skills/DeveloperSkills';
import './skills.scss';
/* const panes = [

  { menuItem: 'Professionnal training', 
  render: () => <Tab.Pane attached={false}>
  <h1>Professionnal training</h1>
 <ProfessionnalT/>
  </Tab.Pane>, },
  { menuItem: 'Developer skills', render: () => <Tab.Pane attached={false}>Developer skills</Tab.Pane>, },
  { menuItem: 'Hobbies', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>, },
]

const SkillsTabs = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
); */

const SkillsTabs = () => {

  return (
    <div className="d-flex align-items-start mx-1">
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button className="nav-link active" id="v-pills-professionnalT-tab" data-bs-toggle="pill" data-bs-target="#v-pills-professionnalT" type="button" role="tab" aria-controls="v-pills-professionnalT" aria-selected="true">Professionnal Training</button>
        <button className="nav-link" id="v-pills-developerSkills-tab" data-bs-toggle="pill" data-bs-target="#v-pills-developerSkills" type="button" role="tab" aria-controls="v-pills-developerSkills" aria-selected="false">Developer Skills</button>
        <button className="nav-link" id="v-pills-hobbies-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hobbies" type="button" role="tab" aria-controls="v-pills-hobbies" aria-selected="false">Hobbies</button>
      </div>
      <div className="tab-content flex-grow-1" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-professionnalT" role="tabpanel" aria-labelledby="v-pills-professionnalT-tab">
          <ProfessionnalT/>
        </div>
        <div className="tab-pane fade" id="v-pills-developerSkills" role="tabpanel" aria-labelledby="v-pills-developerSkills-tab"><DeveloperSkills /></div>
        <div className="tab-pane fade" id="v-pills-hobbies" role="tabpanel" aria-labelledby="v-pills-hobbies-tab">...</div>
        
      </div>
    </div>
  );
};

export default SkillsTabs;
