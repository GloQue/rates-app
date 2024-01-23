
import { FETCH_RATES_FAILURE, FETCH_RATES_SUCCESS, FETCH_RATES_REQUEST, FILTER_BY_CATEGORY } from "../actions"

const initialState = {
    rates: [],
    loading: false,
    error: null
}

export const ratesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_RATES_SUCCESS: {
            return {...state, loading: false, rates: action.payload}
        }

        case FETCH_RATES_FAILURE: {
            return {...state, loading: false, error: action.payload}
        }

        case FETCH_RATES_REQUEST: {
            return {loading: true, error: null}
        }

        case FILTER_BY_CATEGORY: {
            return {...state, rates: state.rates.filter((item) => {
                if(action.payload === 'All'){
                    return item
                }else{
                    return item.category === action.payload
                }
            })}
        }
        default:
            return state
    }
}


