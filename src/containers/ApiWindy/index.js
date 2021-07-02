import { connect } from 'react-redux';
import { fetchCam } from 'src/actions/windy'

// on importe le composant de présentation
import ApiWindy from 'src/components/ApiWindy';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
 
  camList : state.windy.camList,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action

  loadCategory: () => {
    const action = fetchCam();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ApiWindy);
