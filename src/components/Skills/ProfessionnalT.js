import React from 'react';
import Connector from 'src/assets/images/connector.drawio.png';
import Connector2 from 'src/assets/images/connector2.drawio.png';
import { Divider } from 'semantic-ui-react';
import './professionnalT.scss';

const ProfessionnalT = () => (
  <>
    <div>
      <h3>Professionnal training</h3>
    </div>
    <Divider />
    <div>
      <ul>
        <li><span className="date">Today</span></li>
        <div className="content-periode">
          <div>
            <img src={Connector} alt="connecteur" className="connector" />
          </div>
          <div className="content-description">
            <p className="content-title">Professionnal Title:Developer Web and Web Mobile</p>
          </div>
        </div>

        <li><span className="date">Mai 2021</span></li>

        <div className="content-periode">
          <div>
            <img src={Connector2} alt="connecteur" className="connector2" />
          </div>
          <div className="content-description">
            <p>Training course with O'clock school</p>
          </div>
        </div>

        <li><span className="date">October 2021</span></li>
        <div className="content-periode">
          <div>
            <img src={Connector2} alt="connecteur" className="connector2" />
          </div>
          <div className="content-description">
            <p>Industrial Designer/Drafter : SolidWorks CAD Software</p>
          </div>
        </div>

        <li><span className="date">October 2016</span></li>
        <div className="content-periode">
          <div>
            <img src={Connector2} alt="connecteur" className="connector2" />
          </div>
          <div className="content-description">
            <p>Experiences Australia: BoatBuilder, production Supervisor, Gardening, Landscaping buisness owner</p>
          </div>
        </div>

        <li><span className="date">Mai 2008</span></li>
        <div className="content-periode">
          <div>
            <img src={Connector2} alt="connecteur" className="connector2" />
          </div>
          <div className="content-description">
            <p>Industrial Drafter : Solidworks CAD Software</p>
          </div>
        </div>
        <li><span className="date">October 2006</span></li>
        <div className="content-periode">
          <div>
            <img src={Connector2} alt="connecteur" className="connector2" />
          </div>
          <div className="content-description">
            <p>MASTER Degree Genius of Materials, specialized in Polymers Materials</p>
          </div>
        </div>
        <li><span className="date">September 2002</span></li>
        <div className="content-periode">
          <div>
            <img src={Connector2} alt="connecteur" className="connector2" />
          </div>
          <div className="content-description">
            <p>Brevet of Superior Technicien in Plastics</p>
          </div>
        </div>
        <li><span className="date">Far away in the past</span></li>
      </ul>
    </div>
  </>

);

export default ProfessionnalT;
