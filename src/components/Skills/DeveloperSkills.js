import React from 'react';
import IconHtml5 from 'devicon-react-svg';
import IconCss3 from 'devicon-react-svg';
import IconGithub from 'devicon-react-svg';
import IconBootstrap from 'devicon-react-svg';
import IconJavascript from 'devicon-react-svg';
import IconLaravel from 'devicon-react-svg';
import IconPhp from 'devicon-react-svg';
import IconReact from 'devicon-react-svg';
import IconTrello from 'devicon-react-svg';
import IconSass from 'devicon-react-svg';
import IconVisualstudio from 'devicon-react-svg';
import IconRedux from 'src/assets/images/redux.svg';

import './developerSkills.scss';
const DeveloperSkills = ( ) => {

  return (
    <>
      <div className="block-skills">
        <div >
          <h4>Skills</h4>
            <h4>Front-end Skills</h4>

              <div className="col-12">
                <ul>
                  <li>Able to produce technical Requirements including wireframes</li>
                  <li>Able to develop static web page responsive</li>
                  <li>Able to create dynamique and inter-active web page</li>
                </ul>
              </div>
            <h4>Back-end Skills</h4>
              <div className="col-12">
                <ul>
                  <li>DataBase and documentation creation</li>
                  <li>Develop components to access the database</li>
                  <li>develoop the back-end part of a website</li>
                </ul>
              </div>
        </div>
      </div>
        <div>
          <h4>Development code languages</h4>
              <h4>Front-end </h4>
              <div className="block-skill">
                  <div className="container">
                    <div className="row">
                      <div className="col ">
                        <div className="icon-code  d-flex justify-content-center">
                          <IconHtml5  icon="html5" fill="#E44D26" width={75} height={75}/> 
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-code  d-flex justify-content-center">
                    <IconCss3 icon="css3" fill="#160CE9" width={75} height={75} /> 
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                      </div>
                      <div className="col">
                        <div className="icon-code  d-flex justify-content-center">
                          <IconBootstrap icon="bootstrap" fill="#5B4282" width={75} height={75} /> 
                        </div>
                        <div className="progress">
                          <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              <div className="block-skill">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="icon-code  d-flex justify-content-center">
                        <IconJavascript  icon="javascript" fill="yellow" width={75} height={75}/> 
                      </div>
                      <div className="progress">
                          <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                          </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="icon-code  d-flex justify-content-center">
                  <IconReact icon="react" fill="#61DAFB" width={75} height={75} /> 
                  </div>
                  <div className="progress">
                      <div className="progress-bar w-75" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      </div>
                  </div>
                    </div>
                    <div className="col">
                      <div className="icon-code  d-flex justify-content-center">
                        <IconSass icon="sass" fill="#CB6699" width={75} height={75} /> 
                      </div>
                      <div className="progress">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="block-skill">
                  <div className="container">
                    <div className="row">
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            <img src={IconRedux} style={{width:50}, {height:50}} alt="iconRedux"/> 
                          </div>
                          <div className="progress">
                              <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                              </div>
                          </div>
                        </div> 
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            
                          </div>
                          
                        </div>
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            
                          </div>
                          
                        </div>                  
                    </div>
                  </div>
                </div>
                
               

              <h4>Back-end </h4>
                  <div className="block-skill">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            <IconPhp  icon="php" fill="#1C6DBA" width={75} height={75}/> 
                          </div>
                          <div className="progress">
                              <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                              </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            <IconLaravel icon="laravel" fill="#FD4F31" width={75} height={75} /> 
                          </div>
                          <div className="progress">
                              <div className="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="" aria-valuemax="100">
                              </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
                
                
          <h4>Development Tools & Collaborations</h4>
                <div className="block-skill">
                  <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            <IconVisualstudio  icon="visualstudio" fill="#68217A" width={75} height={75}/> 
                          </div>
                          <div className="progress">
                              <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                              </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            <IconGithub icon="github" fill="#F5F5F5" width={75} height={75} /> 
                          </div>
                          <div className="progress">
                            <div className="progress-bar w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                          </div>
                        </div>
                        </div>
                        <div className="col">
                          <div className="icon-code  d-flex justify-content-center">
                            <IconTrello icon="trello" fill="#23719F" width={75} height={75} /> 
                          </div>
                          <div className="progress">
                            <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            </div>
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
