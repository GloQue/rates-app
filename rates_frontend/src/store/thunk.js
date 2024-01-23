import { FETCH_RATES_FAILURE, FETCH_RATES_SUCCESS } from "./actions"

export const fetchRatesRequest = () => async (dispatch) => {

    try {
            const data = await fetch('http://localhost:6090', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const rates = await data.json() 
        dispatch({type: FETCH_RATES_SUCCESS, payload: rates})
        return rates
        
    } catch (error) {
        console.log(error)
        dispatch({type: FETCH_RATES_FAILURE, payload: error.message})
    }
}
