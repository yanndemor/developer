import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import githubMiddleware from 'src/middlewares/githubMiddleware';
import apiWindy from 'src/middlewares/windyMiddleware';
import reducer from 'src/reducers';
import contactMiddleware from 'src/middlewares/contactMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    githubMiddleware,
    apiWindy,
    contactMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancers
  enhancers,
);
export default store;
