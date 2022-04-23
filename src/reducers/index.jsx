import { combineReducers } from 'redux';
import data from './groups.reducer';
import movies from './movies.reducer';
import theme from './theme.reducer';
import auth from './auth.reducer';
import { user } from './user.reducer';

const rootReducer = combineReducers({
  data: data,
  auth: auth,
  theme: theme,
  user: user
});

export default rootReducer;