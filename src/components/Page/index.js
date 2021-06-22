import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from 'src/components/LoadingSpinner';
import ApiGithub from 'src/containers/ApiGithub';
import FormGitHub from 'src/containers/FormGitHub';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Page = ({ loading }) => (
  <div className="page">
    <div className="page-content">
      <Switch>

        <Route path="/ApiGithub">
         {/*  {loading && <LoadingSpinner />}
          {!loading && ( */}
          <div>
            <FormGitHub />
            <ApiGithub />
          </div>
         {/*  )} */}
        </Route>

      </Switch>
    </div>
  </div>
);
Page.propTypes = {

  loading: PropTypes.bool.isRequired,
 
};
export default Page;
