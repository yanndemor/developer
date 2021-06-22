export const FETCH_REPOS = 'FETCH_REPOS';
export const SAVE_REPOS = 'SAVE_REPOS';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';

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
