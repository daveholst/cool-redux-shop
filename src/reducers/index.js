import drinksCounterReducer from "./drinksCounter";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  drinksCounter: drinksCounterReducer
})

export default allReducers