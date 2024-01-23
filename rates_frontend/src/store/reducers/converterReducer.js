import { CONVERT_DOLLAR_TO_CEDI } from "../actions"

const initialState = {
    amount: 0
}

export const converterReducer = (state = initialState, action) => {
    switch(action.type){
        case CONVERT_DOLLAR_TO_CEDI: {
            return {amount: 11.74 * action.payload}
        }

        default:
            return state
    }
}