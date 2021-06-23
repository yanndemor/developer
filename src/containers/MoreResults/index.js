import { connect } from 'react-redux';
import { fetchResults } from 'src/actions/github';

// on importe le composant de présentation
import MoreResults from 'src/components/MoreResults';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  githubList: state.github.githubList,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  fetchMore: () => {
    const action = fetchResults();
    dispatch(action);
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MoreResults);
