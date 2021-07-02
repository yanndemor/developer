import axios from 'axios';
import { FETCH_CAM, saveCam } from 'src/actions/windy.js'

// const API_URL = 'http://ec2-3-85-110-30.compute-1.amazonaws.com/apo-OnTheSpot-back/public/api';
const API_URL = 'https://api.windy.com/api/webcams/v2/list/webcam=1620452597,1615546281,1604137586,1589009538,1583127872,1578788275,1552564124,1469748436,1418028873,1403781260?show=webcams:image,location,player';

const windyMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  console.log('on va charger les résultats pour :');
  switch (action.type) {
    // action defined in the file action to get all categories, the action is loaded in the app
    // component to load all categories when the component app is rendered

    case FETCH_CAM: {
      
      axios.get(`${API_URL}&key=91ZtHKdmaLqc86QoCi6gdmoxNxtiimum`)
        .then((response) => {
           console.log('response: ', response);
           store.dispatch(saveCam(response.data.result.webcams));
          // action creator to save the categories!
          
        })
        .catch((error) => {
        /*   console.log('error:', error); */
        });

      next(action);
      break;
    }
  
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default windyMiddleware;
