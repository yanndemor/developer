import React from 'react';
import LoadingSpinner from 'src/components/LoadingSpinner';
import ApiGithub from 'src/containers/ApiGithub';
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
          {loading && <LoadingSpinner />}
          {!loading && (
          <div>
            <ApiGithub />
          </div>
          )}
        </Route>

      </Switch>
    </div>
  </div>
);
export default Page;
