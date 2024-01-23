// import React, {useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchRatesRequest } from '../store/thunk'
// import Home from '../pages/Home';
// import Buttons from './Buttons';
// import ExchangeRates from '../pages/ExchangeRates';

// function Data() {
//     const dispatch = useDispatch()
//     const { rates, loading, error } = useSelector((state) => state.rates);

//     useEffect(() => {
//         dispatch(fetchRatesRequest())
//     }, [dispatch])

//     console.log(rates)
//   return (
//     <div>
//        <Buttons rates={rates}/>
//        <ExchangeRates rates={rates}/>
//     </div>
//   )
// }

// export default Data