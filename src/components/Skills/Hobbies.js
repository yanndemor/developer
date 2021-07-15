/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import surf from 'src/assets/images/surf.png';
import golf from 'src/assets/images/golf.JPG';
import baseball from 'src/assets/images/Baseball.JPG';
import rockClimbing from 'src/assets/images/escalade.JPG';
import { Divider } from 'semantic-ui-react';

import './hobbies.scss';

const Hobbies = () => (
  <>
    <div>
      <h3>Hobbies</h3>
    </div>
    <Divider />
    <div className="container ">
      <div className="row d-flex flex-column flex-lg-row align-items-center mb-3 mt-3 ">
        <h4 className="title-hobby">Surfing<span className="line-title" /></h4>
        <div className="col descriptiion-hobby">

          {/* <p>Since almost 30 years, I practice surfing all around the world, this hobbie developed my following skills:</p> */}
          <ul>
            <li>&bull; Commitment</li>
            <li>&bull; Stress control</li>
            <li>&bull; Tenacity to reach the goal</li>
          </ul>
        </div>
        <div className="col  image-bg-golf">
          <img className=" float-start image-hobbies" src={surf} alt="surf" />

        </div>
      </div>
      <Divider />
      <div className="row d-flex flex-column flex-lg-row align-items-center mb-3 mt-3 ">
        <h4 className="title-hobby">Golf<span className="line-title" /></h4>
        <div className="col   image-bg-surf">
          <img className="float-end image-hobbies" src={golf} alt="golf" />
        </div>

        <div className="col descriptiion-hobby">

          {/* <p>Since the age of 10 years old, I practiced golf espacially while living in Ausralia for 8 years, this hobbie developed my following skills:</p> */}
          <ul>
            <li>&bull; Capacity to focus and stress control </li>
            <li>&bull; Capacity to adapt myself to the situation</li>
            <li>&bull; Capacity to react</li>
          </ul>
        </div>
      </div>
      <Divider />
      <div className="row d-flex flex-column flex-lg-row align-items-center mb-3 mt-3">
        <h4 className="title-hobby">RockClimbing<span className="line-title" /></h4>
        <div className="col descriptiion-hobby">

          {/*  <p>At the age of 10 years old, I practiced rockclimbing as a leisure and competiton. Today, occasionally, I practice with friends and family. This hobbie developed my following skills:</p> */}
          <ul>
            <li>&bull; Confidence </li>
            <li>&bull; Responsability</li>
            <li>&bull; Adaptation</li>
            <li>&bull; Self control</li>
          </ul>
        </div>
        <div className="col   image-bg-rockClimbing">
          <img className="float-start image-hobbies" src={rockClimbing} alt="escalade" />
        </div>
      </div>
      <Divider />
      <div className="row d-flex flex-column flex-lg-row align-items-center mb-3 mt-3 ">
        <h4 className="title-hobby">Baseball<span className="line-title" /></h4>
        <div className="col  image-bg-baseball">
          <img className="float-end image-hobbies" src={baseball} alt="baseball" />
        </div>
        <div className="col description-hobby">

          {/*  <p>At the age of 15 years old, I went in USA to develop my english langage, I stayed in a family for 3 weeks where baseball was a biig passion, I got introduce to it and once back in France, i found a club , I played baseball in France while student and in Australia for the summer season and winter season in differents cllubs</p> */}
          <ul>
            <li>&bull; Confidence </li>
            <li>&bull; Focus</li>
            <li>&bull; Team player</li>
            <li>&bull; Sociability</li>
          </ul>
        </div>
      </div>

    </div>
  </>
);

Hobbies.propTypes = {

};
export default Hobbies;
