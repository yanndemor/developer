/* import of the action type */
import { SAVE_REPOS, UPDATE_USER_FIELD } from 'src/actions/github';

const initialState = {

  githubList: [],
  userGithub: '',
  
  loading: true,
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

    default:
      return state;
  }
}

export default githubReducer;
