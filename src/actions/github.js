export const FETCH_REPOS = 'FETCH_REPOS';
export const SAVE_REPOS = 'SAVE_REPOS';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const NBR_REPOS = 'NBR_REPOS';
export const TOTAL_REPOS = 'TOTAL_REPOS';
export const FETCH_RESULTS = 'FETCH_RESULTS';
export const SAVE_NEW_REPOS = 'SAVE_NEW_REPOS';
export const CLEAR_GITHUB_LIST = 'CLEAR_GITHUB_LIST';

export const fetchRepos = () => ({
  type: FETCH_REPOS,
});
export const saveRepos = (repos) => ({
  type: SAVE_REPOS,
  loadedRepos: repos,
});
export const updateUserField = (newValue, value) => ({
  type: UPDATE_USER_FIELD,
  // newValue: newValue
  // shorthand property (ES6)
  newValue,
  value,
});
export const nbrRepos = (number) => ({
  type: NBR_REPOS,
  // newValue: newValue
  // shorthand property (ES6)
  nbrRepos: number,
});
export const totalRepos = (total) => ({
  type: TOTAL_REPOS,
  // newValue: newValue
  // shorthand property (ES6)
  totalRepos: total,
});
export const fetchResults = () => ({
  type: FETCH_RESULTS,
});
export const saveNewRepos = (repos) => ({
  type: SAVE_NEW_REPOS,
  loadedRepos: repos,
});
export const clearGithubList =() => ({
  type: CLEAR_GITHUB_LIST,
});
