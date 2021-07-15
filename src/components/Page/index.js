import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from 'src/components/LoadingSpinner';
import ApiGithub from 'src/containers/ApiGithub';
import FormGitHub from 'src/containers/FormGitHub';
import MoreResults from 'src/containers/MoreResults';
import Counter from 'src/containers/Counter';
import Home from 'src/components/Home';
import ApiWindy from 'src/containers/ApiWindy';
import Cam from 'src/containers/Cam';
import Skills from 'src/components/Skills';
import Contact from 'src/components/Contact';
import { Dimmer, Loader } from 'semantic-ui-react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Page = ({ loading, totalRepos, githubList}) => (
  <div className="page">
    <div className="page-content">
      <Switch>

        <Route path="/apiGithub" exact> 
          <div>
            <FormGitHub />
            <Counter />
            <ApiGithub />
            {githubList.length !== totalRepos && (
            <MoreResults />
            )}
          </div>
          {/*  )} */}
        </Route>

        <Route path="/apiWindy" exact>
              <ApiWindy />
        </Route>

        <Route path="/" exact>
          <div>
            <Home />
          </div>
        </Route>

        <Route path="/apiWindy/:slug" exact>
          <Cam />
        </Route>

        <Route path="/skills" exact>
          <Skills />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  </div>
);
Page.propTypes = {

  loading: PropTypes.bool.isRequired,
  totalRepos: PropTypes.number.isRequired,
  githubList: PropTypes.array.isRequired,
 

};
export default Page;
