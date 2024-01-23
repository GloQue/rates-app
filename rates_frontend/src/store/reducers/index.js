import { combineReducers } from "redux";
import { ratesReducer } from "./ratesReducer";
import { converterReducer } from "./converterReducer";

export const rootReducers = combineReducers({
    rates: ratesReducer,
    amount: converterReducer
})

