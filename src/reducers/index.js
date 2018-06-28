import { combineReducers } from 'redux';
import application from './applicationReducers';
import { reducer as reduxFormReducer } from 'redux-form';

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  router: routerReducer,
  application,
  form: reduxFormReducer
});

export default rootReducer;
