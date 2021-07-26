import { combineReducers } from "redux";
import searchLocaleReducer from "./searchLocale";

const reducers = combineReducers({
  reducerLocale: searchLocaleReducer
})

export default reducers