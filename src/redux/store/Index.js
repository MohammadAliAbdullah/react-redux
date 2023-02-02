import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from "../reducers";

const initialState = {};
const reducers = combineReducers({
  nameReducer: Reducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState, 
  composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  )
);
export default store;