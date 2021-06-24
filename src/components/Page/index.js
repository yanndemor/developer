import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from 'src/components/LoadingSpinner';
import ApiGithub from 'src/containers/ApiGithub';
import FormGitHub from 'src/containers/FormGitHub';
import MoreResults from 'src/containers/MoreResults';
import Counter from 'src/containers/Counter';
import { Dimmer, Loader } from 'semantic-ui-react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Page = ({ loading, totalRepos, githubList }) => (
  <div className="page">
    <div className="page-content">
      <Switch>

        <Route path="/ApiGithub">
          
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
