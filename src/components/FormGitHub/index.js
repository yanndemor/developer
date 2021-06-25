/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';
import guillemet1 from 'src/assets/images/guillemets 1.png';
import guillemet2 from 'src/assets/images/guillemets 2.png';
import githubLogo from 'src/assets/images/logo-github.png';
import Field from './Field';
import './form.scss';

const FormGitHub = ({ manageSubmit, value, changeField }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <>

      <div className="block-presentation-github">
        <div className="image">
          <div>
            <img src={githubLogo} alt="logo-react" />
          </div>
        </div>
        <div className="block-description">
          <img className="github-guillemet1" src={guillemet1} alt="react logo" />
          <h3>Reach the repo Github You are looking for</h3>
          <div className="github-guillemet2">
            <img src={guillemet2} alt="react logo" />
          </div>
        </div>

      </div>
      <div className="description-github">
        <h4 className="description">Description:</h4>
        <p className="paragraphe-description">In this project, I have used an API request on Github, permitting to collect all publics repositories regarding
          the technologies or subject related to your keyword you submitted in the Input bar below!
        </p>
        <p> This projet is produced using the library javascript React and
          Redux to manage the request API and the datas to the differents React components!
        </p>
      </div>
      <div className="container-input">
        <form className="input" onSubmit={handleSubmit}>
          <Field
            type="text"
            id="input-search"
            placeholder="Search..."
            manageChange={changeField}
            value={value}
          />
        </form>
      </div>
    </>
  );
};

FormGitHub.propTypes = {

  manageSubmit: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default FormGitHub;
