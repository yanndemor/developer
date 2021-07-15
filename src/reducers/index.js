import { combineReducers } from 'redux';

// on importe tous les reducers
import githubReducer from './githubReducer';
import windyReducer from './apiWindyReducer';
import contactReducer from './contactReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  github: githubReducer,
  windy: windyReducer,
  contact: contactReducer,
  // etc
});

export default rootReducer;
