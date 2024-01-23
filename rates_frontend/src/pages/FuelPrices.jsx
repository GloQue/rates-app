import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRatesRequest } from '../store/thunk'
import Buttons from '../components/Buttons';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

function FuelPrices() {
    const dispatch = useDispatch()
    const { rates, loading, error } = useSelector((state) => state.rates);
    console.log('all', rates)

    useEffect(() => {
        dispatch(fetchRatesRequest())
    }, [dispatch])

    const date = new Date().toDateString()

  return (
    <div className='exchange_rates_section'>
      <h2>Fuel Prices Today</h2>  
      <div className='date_btn'>
        <button>{date}</button>
        <input type="text" placeholder='Enter amount in US Dollars'/>
      </div>
      <div className='table_container'>
        <table className='rates_table'>
          <caption className='table_caption'></caption>
          <thead>
              <tr>
                <th>Name</th>
                <th>Buying</th>
                <th>Selling</th>
                <th>MidRate</th>
              </tr>
          </thead>
          <tbody>
              {
                rates.map((btn) => (
                  <tr key={btn.id}>
                  <td>{btn.name}</td>
                  <td>{btn.buying}</td>
                  <td>{btn.selling}</td>
                  <td>{btn.midrate}</td>
                  </tr>
                ))   
              }     
          </tbody>
        </table>
      </div>
    </div>
  )
}



export default FuelPrices