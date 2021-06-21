import axios from 'axios';
import { FETCH_REPOS, saveRepos } from 'src/actions/github';

// const API_URL = 'http://ec2-3-85-110-30.compute-1.amazonaws.com/apo-OnTheSpot-back/public/api';
const API_URL = 'https://api.github.com/search/';

const githubMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    // action defined in the file action to get all categories, the action is loaded in the app 
    // component to load all categories when the component app is rendered
    case FETCH_REPOS:
      axios.get(`${API_URL}/repositories?q=react&sort=stars&order=desc&page=1&per_page=9`)
        .then((response) => {
          // console.log('response: ', response);
          // action creator to save the categories!
          store.dispatch(saveRepos(response.data.items));
        })
        .catch((error) => {
        /*   console.log('error:', error); */
        });

      next(action);
      break;
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default githubMiddleware;
