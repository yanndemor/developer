export const FETCH_REPOS = 'FETCH_REPOS';
export const SAVE_REPOS = 'SAVE_REPOS';

export const fetchRepos = () => ({
  type: FETCH_REPOS,
});
export const saveRepos = (repos) => ({
  type: SAVE_REPOS,
  loadedRepos: repos,
});
