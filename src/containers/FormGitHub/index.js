import { connect } from 'react-redux';
import { fetchRepos, updateUserField } from 'src/actions/github';

// on importe le composant de présentation
import FormGitHub from 'src/components/FormGitHub';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  
  loading: state.github.loading,
  value: state.github.userGithub,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  manageSubmit: () => {
    const action = fetchRepos();
    dispatch(action);
  },
  changeField: (newValue, value) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(updateUserField(newValue, value));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(FormGitHub);
