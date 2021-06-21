/* import of the action type */
import { SAVE_REPOS, /* SHOW_CATEGORIE  */} from 'src/actions/github';

const initialState = {
  
  githubList: [],

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

    default:
      return state;
  }
}

export default githubReducer;
