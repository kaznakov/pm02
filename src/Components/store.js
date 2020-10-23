import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import { reducer as formReducer } from 'redux-form'
const LOAD = 'redux-form-examples/account/LOAD';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: { ...action.data, date_release: (new Date(action.data.date_release)).toISOString().substr(0, 10) }
      };
    default:
      return state;
  }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */

export const load = data => ({ type: LOAD, data });


const store = createStore(
  combineReducers({
    form: formReducer,
    ticket: reducer
  },
  ),
  applyMiddleware(logger)
)
window.store = store;
export default store


