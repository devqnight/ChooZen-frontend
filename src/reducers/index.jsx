import { combineReducers } from 'redux';
import groups from './groups.reducer';
import movies from './movies.reducer';
import theme from './theme.reducer';
import auth from './auth.reducer';

const rootReducer = combineReducers({
  movies: movies,
  groups: groups,
  auth: auth,
  theme: theme
});

export default rootReducer;