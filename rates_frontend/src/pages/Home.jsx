import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRatesRequest } from '../store/thunk'
import { Link } from 'react-router-dom'


function Home() {
    const dispatch = useDispatch()
    const { rates, loading, error } = useSelector((state) => state.rates);
    
    useEffect(() => {
        dispatch(fetchRatesRequest())
    }, [dispatch])


    if(loading){
        return <div>loading</div>
    }

    if(error){
        return <div>please try again</div>
    }

    // if(!loading){
    //     return <div>loaded</div>
    // }
  return (
    <div className='homepage'>
      <div className='home_top'>
        <h1 className='title'>Explore Exchange Rates And Fuel Prices</h1>
        <p>Find Dollar to Cedi Exchange Rates and Fuel Prices in Ghana today</p>
      </div>
      

        <div className='table_container_home'>
          <table className='home_rates_table'>
            <thead>
              <h2 className='table_title'>Exchange Rates (USD) <span><Link to="/exchangerates" className='see_more'>see more</Link></span></h2>
              <tr className='head'>
                <th>Name</th>
                <th>Buying</th>
                <th>Selling</th>
                <th>MidRate</th>
              </tr>
            </thead>
            <tbody>
               {
                rates.slice(0, 4).map((info) => (
                  <tr key={info._id}>
                    <td><Link>{info.name}</Link></td>
                    <td><Link>{info.buying}</Link></td>
                    <td><Link>{info.selling}</Link></td>
                    <td><Link>{info.midrate}</Link></td>
                </tr>
                ))
               }
            </tbody>
            <tfoot className='tfoot'>Convert <span>1 US Dollar </span>to Ghanaian Cedis at <span>12.17</span></tfoot>
          </table>

          <table className='home_fuel_table'>
            <thead>
              <h2 className='table_title'>Fuel Prices<span><Link to="/fuelprices" className='see_more'>see more</Link></span></h2>
              <tr>
                <th>Name</th>
                <th>Buying</th>
                <th>Selling</th>
                <th>MidRate</th>
              </tr>
            </thead>
            <tbody>
              {
                rates.slice(0, 4).map((info) => (
                  <tr key={info._id}>
                    <td><Link>{info.name}</Link></td>
                    <td><Link>{info.buying}</Link></td>
                    <td><Link>{info.selling}</Link></td>
                    <td><Link>{info.midrate}</Link></td>
                </tr>
                ))
              }
            </tbody>
            <tfoot className='tfoot'>Fill your tank with fuel price per litre at <span>11.82</span></tfoot>
          </table>
        </div>

        <div className='homepage_mid_section'>
          <h2>Compare rates easily</h2>
          <p>Whether you want to convert dollars to cedis or check how much it costs to fill your fuel tank, CediRates can help with that.</p>
        </div>
    </div>
  )
}

export default Home