/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
/* import
  IconHtml5,
  IconCss3,
  IconGithub,
  IconBootstrap,
  IconJavascript,
  IconLaravel,
  IconPhp,
  IconReact,
  IconTrello,
  IconSass,
  IconVisualstudio
 from 'devicon-react-svg'; */
import {
  FaHtml5, FaCss3Alt, FaGithub, FaBootstrap, FaJs, FaLaravel, FaPhp, FaReact, FaSass, FaTrello,
} from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';

import IconRedux from 'src/assets/images/redux.svg';
import { Divider } from 'semantic-ui-react';

import './developerSkills.scss';

const DeveloperSkills = () => {
  const iconStyles = { height: 50, width: 50, margintop: 10 };
  return (
    <>

      <h3>Developer Skills</h3>
      <Divider />
      <div className="block-skills">
        <div>
          <div className="block-title-list">
            <h4 className="title-skills">Overview Skills<span className="line-title" /></h4>
          </div>

          <h5 className="title-code">Front-end Skills</h5>

          <div className="col-12 ms-lg-3">
            <ul>
              <li>&bull; Write Out Specifications & technical Requirements including wireframes</li>
              <li>&bull; Development of responsive & static web page </li>
              <li>&bull; Development of responsive, dynamique & inter-active web page</li>
            </ul>
          </div>
          <h5 className="title-code">Back-end Skills</h5>
          <div className="col-12 ms-lg-3">
            <ul>
              <li>&bull; DataBase & its documentations creation </li>
              <li>&bull; Development of components to access the database</li>
              <li>&bull; Development of the back-end part of a website</li>
            </ul>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <div className="block-title-list">
          <h4 className="title-skills">Development code languages<span className="line-title" /></h4>
        </div>

        <h5 className="title-code">Front-end Languages & Frameworks</h5>
        <div className="block-skill">
          <div className="container">
            <div className="row">
              <div className="col ">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaHtml5 fill="#E44D26" style={iconStyles} />
                  <div>
                    <h6>HTML 5</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaCss3Alt fill="#160CE9" style={iconStyles} />
                  <div>
                    <h6>Css 3</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaBootstrap fill="#5B4282" style={iconStyles} />
                  <div>
                    <h6>Bootstrap</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="block-skill">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaJs fill="yellow" style={iconStyles} />
                  <div>
                    <h6>Javascript</h6>
                  </div>
                </div>

                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaReact fill="#61DAFB" style={iconStyles} />
                  <div>
                    <h6>React</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-75" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center mt-3 mb-2">
                  <FaSass fill="#CB6699" style={iconStyles} />
                  <div>
                    <h6>Sass</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-25" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-skill">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <img src={IconRedux} style={{ width: 50 }, { height: 50 }} alt="iconRedux" />
                  <div>
                    <h6>Redux</h6>
                  </div>
                </div>

                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">
                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2" />

              </div>
              <div className="col">
                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2" />

              </div>
            </div>
          </div>
        </div>

        <h5 className="title-code">Back-end Languages & Frameworks </h5>
        <div className="block-skill">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaPhp fill="#1C6DBA" style={iconStyles} />
                  <div>
                    <h6>Php Language</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaLaravel fill="#FD4F31" style={iconStyles} />
                  <div>
                    <h6>Laravel Framework</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">
                <div className="icon-code  d-flex justify-content-center  mt-3 mb-2" />
              </div>
            </div>
          </div>
        </div>

        <Divider />
        <div className="block-title-list">
          <h4 className="title-skills">Development Tools & Collaborations<span className="line-title" /></h4>
        </div>
        <div className="block-skill">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="icon-code  d-flex flex-column align-items-center  mt-3 mb-2">
                  <DiVisualstudio fill="#68217A" style={iconStyles} />
                  <div>
                    <h6>Visual Studio Code</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaGithub fill="#F5F5F5" style={iconStyles} />
                  <div>
                    <h6>Github</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
              <div className="col">

                <div className="icon-code  d-flex  flex-column align-items-center  mt-3 mb-2">
                  <FaTrello fill="#23719F" style={iconStyles} />
                  <div>
                    <h6>Trello</h6>
                  </div>
                </div>
                <div className="progress w-75 mx-auto">
                  <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default DeveloperSkills;
