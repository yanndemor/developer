import { combineReducers } from 'redux';

// on importe tous les reducers
import githubReducer from './githubReducer';


// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  github: githubReducer,
 
  // etc
});

export default rootReducer;
