/* import of the action type */
import {
  UPDATE_CONTACT_FIELD,
} from 'src/actions/contact';

const initialState = {

  firstname: '',
  lastname: '',
  email: '',
  message: '',
  phoneNumber: '',
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CONTACT_FIELD:
    console.log('hello');
      if (action.name === 'firstname') {
        console.log('hello2');
        return {
          ...state,
          firstname: action.newValue,
        };
      }
      if (action.name === 'lastname') {
        return {
          ...state,
          lastname: action.newValue,
        };
      }
      if (action.name === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      if (action.name === 'phoneNumber') {
        return {
          ...state,
          phoneNumber: action.newValue,
        };
      }
      if (action.name === 'message') {
        return {
          ...state,
          message: action.newValue,
        };
      }

      return {
        ...state,
      };
    default:
      return state;
  }
}

export default contactReducer;
