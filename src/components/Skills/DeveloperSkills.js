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
import { Divider } from 'semantic-ui-react';

import './developerSkills.scss';
const DeveloperSkills = ( ) => {

  return (
    <>
    
    <h3>Developer Skills</h3>
    <Divider/>
      <div className="block-skills">
        <div >
        <div className="block-title-list">
          <h4 className="title-skills">Overview Skills<span className="line-title"></span></h4>
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
      <Divider/>
        <div>
        <div className="block-title-list">
          <h4 className="title-skills">Development code languages<span className="line-title"></span></h4>
        </div>
        
              <h5 className="title-code">Front-end Languages & Frameworks</h5>
              <div className="block-skill">
                  <div className="container">
                    <div className="row">
                      <div className="col ">
                        
                        <div className="icon-code  d-flex  flex-column align-items-center">
                          <IconHtml5  icon="html5" fill="#E44D26" width={75} height={75}/> 
                          <div>
                            <h6>HTML 5</h6>
                          </div>
                        </div>
                        <div className="progress w-75 mx-auto">
                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                      </div>
                      <div className="col">
                     
                        <div className="icon-code  d-flex  flex-column align-items-center">
                    <IconCss3 icon="css3" fill="#160CE9" width={75} height={75} /> 
                    <div>
                        <h6>Css 3</h6>
                      </div>
                    </div>
                    <div className="progress w-75 mx-auto">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                      </div>
                      <div className="col">
                      
                        <div className="icon-code  d-flex  flex-column align-items-center">
                          <IconBootstrap icon="bootstrap" fill="#5B4282" width={75} height={75} /> 
                          <div>
                        <h6>Bootstrap</h6>
                      </div>
                        </div>
                        <div className="progress w-75 mx-auto">
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
                    
                      <div className="icon-code  d-flex  flex-column align-items-center">
                        <IconJavascript  icon="javascript" fill="yellow" width={75} height={75}/> 
                        <div>
                        <h6>Javascript</h6>
                      </div>
                      </div>
                      
                      <div className="progress w-75 mx-auto">
                          <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                          </div>
                      </div>
                    </div>
                    <div className="col">
                  
                      <div className="icon-code  d-flex  flex-column align-items-center">
                  <IconReact icon="react" fill="#61DAFB" width={75} height={75} />   
                  <div>
                        <h6>React</h6>
                      </div>
                  </div>
                  <div className="progress w-75 mx-auto">
                      <div className="progress-bar w-75" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      </div>
                  </div>
                    </div>
                    <div className="col">
                    
                      <div className="icon-code  d-flex  flex-column align-items-center">
                        <IconSass icon="sass" fill="#CB6699" width={75} height={75} /> 
                        <div>
                        <h6>Sass</h6>
                      </div>
                      </div>
                      <div className="progress w-75 mx-auto">
                        <div className="progress-bar w-25" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
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
                          
                          <div className="icon-code  d-flex  flex-column align-items-center">
                            <img src={IconRedux} style={{width:50}, {height:50}} alt="iconRedux"/> 
                            <div>
                        <h6>Redux</h6>
                      </div>
                          </div>
                          
                          <div className="progress w-75 mx-auto">
                              <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                              </div>
                          </div>
                        </div> 
                        <div className="col">
                          <div className="icon-code  d-flex  flex-column align-items-center">
                            
                          </div>
                          
                        </div>
                        <div className="col">
                          <div className="icon-code  d-flex  flex-column align-items-center">
                            
                          </div>
                          
                        </div>                  
                    </div>
                  </div>
                </div>
                
               

              <h5 className="title-code">Back-end Languages & Frameworks </h5>
                  <div className="block-skill">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          
                          <div className="icon-code  d-flex  flex-column align-items-center">
                            <IconPhp  icon="php" fill="#1C6DBA" width={75} height={75}/> 
                            <div>
                            <h6>Php Language</h6>
                          </div>
                          </div>
                          <div className="progress w-75 mx-auto">
                              <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                              </div>
                          </div>
                        </div>
                        <div className="col">
                       
                          <div className="icon-code  d-flex  flex-column align-items-center">
                            <IconLaravel icon="laravel" fill="#FD4F31" width={75} height={75} /> 
                             <div>
                        <h6>Laravel Framework</h6>
                      </div>
                          </div>
                          <div className="progress w-75 mx-auto">
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
        
                
          <Divider/> 
          <div className="block-title-list">
          <h4 className="title-skills">Development Tools & Collaborations<span className="line-title"></span></h4>
        </div>
                <div className="block-skill">
                  <div className="container">
                      <div className="row">
                        <div className="col">
                       
                          <div className="icon-code  d-flex flex-column align-items-center">
                            <IconVisualstudio  icon="visualstudio" fill="#68217A" width={75} height={75}/> 
                            <div>
                        <h6 >Visual Studio Code</h6>
                      </div>
                          </div>
                          <div className="progress w-75 mx-auto">
                              <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                              </div>
                          </div>
                        </div>
                        <div className="col">
                          
                          <div className="icon-code  d-flex  flex-column align-items-center">
                            <IconGithub icon="github" fill="#F5F5F5" width={75} height={75} /> 
                            <div>
                            <h6>Github</h6>
                          </div>
                          </div>
                          <div className="progress w-75 mx-auto">
                            <div className="progress-bar w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                          </div>
                        </div>
                        </div>
                        <div className="col">
                       
                          <div className="icon-code  d-flex  flex-column align-items-center">
                            <IconTrello icon="trello" fill="#23719F" width={75} height={75} /> 
                            <div>
                        <h6>Trello</h6>
                      </div>
                          </div>
                          <div className="progress w-75 mx-auto">
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
