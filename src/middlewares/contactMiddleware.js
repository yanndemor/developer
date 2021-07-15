import axios from 'axios';
import { SUBMIT_MAIL } from 'src/actions/contact';
import emailjs from 'emailjs-com';
// const API_URL = 'http://ec2-3-85-110-30.compute-1.amazonaws.com/apo-OnTheSpot-back/public/api';
const API_URL = 'https://api.github.com/search';

const contactMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  console.log('on va charger les résultats pour :');
  switch (action.type) {
    // action defined in the file action to get all categories, the action is loaded in the app
    // component to load all categories when the component app is rendered

    case SUBMIT_MAIL: {
      axios.emailjs.sendForm('service_yrmypg6', 'template_b8gwjne', e.target, 'user_pFNFURYfh6eP7lB7q4NlH')
        .then((result) => {
          alert('Message Sent, We will get back to you shortly', result.text);
        },
        (error) => {
          alert('An error occurred, Please try again', error.text);
        });

      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default contactMiddleware;
