import { connect } from 'react-redux';

import { fetchRepos } from 'src/actions/github';

// on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
