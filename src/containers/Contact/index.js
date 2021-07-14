import { connect } from 'react-redux';
import { updateContactField, submitMail } from 'src/actions/contact';

// on importe le composant de présentation
import Contact from 'src/components/Contact';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  firstname: state.contact.firstname,
  lastname: state.contact.lastname,
  email: state.contact.email,
  message: state.contact.message,
  phoneNumber: state.contact.phoneNumber,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(updateContactField(newValue, name));
  },
  handleMail: () => {
    dispatch(submitMail());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
