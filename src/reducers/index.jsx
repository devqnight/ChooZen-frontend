import { combineReducers } from 'redux';
import groups from './groups.reducer';
import movies from './movies.reducer';
import theme from './theme.reducer';
import auth from './auth.reducer';
import { user } from './user.reducer';

const rootReducer = combineReducers({
  movies: movies,
  groups: groups,
  auth: auth,
  theme: theme,
  user: user
});

export default rootReducer;