/* import of the action type */
import {
  SAVE_REPOS, UPDATE_USER_FIELD, TOTAL_REPOS, SAVE_NEW_REPOS, CLEAR_GITHUB_LIST,
} from 'src/actions/github';

const initialState = {

  githubList: [],
  userGithub: '',
  totalRepos: 0,
  nbrRepos: 0,
  loading: false,
 
};

function githubReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_REPOS:
      return {
        ...state,
        githubList: action.loadedRepos,
        loading: false,
       
      };
    case UPDATE_USER_FIELD:

      return {
        ...state,
        userGithub: action.newValue,
      };
    case TOTAL_REPOS:

      return {
        ...state,
        totalRepos: action.totalRepos,
        nbrRepos: action.totalRepos,
      };
    case CLEAR_GITHUB_LIST:
      return {
        ...state,
        githubList: [],
      };
    case SAVE_NEW_REPOS: 

      return {
        ...state,
        githubList: state.githubList.concat(action.loadedRepos),
        loading: false,
      };
    default:
      return state;
  }
}

export default githubReducer;
