/* import of the action type */
import {
  SAVE_CAM
} from 'src/actions/windy';

const initialState = {

  camList: [],
  
 
};

function apiWindyReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CAM:
      return {
        ...state,
        camList: action.loadedCam,
       
       
      };
   
    default:
      return state;
  }
}

export default apiWindyReducer;
