import { combineReducers } from 'redux';
import data from './groups.reducer';
import movies from './movies.reducer';
import theme from './theme.reducer';
import auth from './auth.reducer';
import { user } from './user.reducer';

const appReducer = combineReducers({
  data: data,
  auth: auth,
  theme: theme,
  user: user
});

const rootReducer = (state, action) => {
    if(action.type === 'USER_LOGOUT')
        return appReducer(undefined, action);
    return appReducer(state, action);
}

export default rootReducer;