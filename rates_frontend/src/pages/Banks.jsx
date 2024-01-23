import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRatesRequest } from '../store/thunk'
import Buttons from '../components/Buttons';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

function Banks() {
    const dispatch = useDispatch()
    // const { rates, loading, error } = useSelector((state) => state.rates);
    const [data, setData] = useState([])
    const [buttons, setButtons] = useState([])
    const [filteredData, setFilteredData] = useState([])

    console.log({data})
    console.log({buttons})
    console.log('banks', filteredData)

    // const categories = tickets.reduce((acc, current) => {
    //   if(!acc.includes(current.category)){
    //     acc.push(current.category)
    //   }
    //   return acc
    // }, ['All'])

    const filterData = (category) => {
      if(category === 'All'){
        setFilteredData(data)
      }else{
        const otherCategories = data.filter((item) => item.category === category)
        setFilteredData(otherCategories)
      } 
    }

    useEffect(() => {
      dispatch(fetchRatesRequest()).then(response => {
        setData(response)
        const category = response.map((btn) => {
          return btn.category
        })
        const finalBtns = ['All', ...new Set(category)]
        setButtons(finalBtns)
        // setFilteredData(response)
      })
    }, [dispatch])

    const date = new Date().toDateString()

  return (
    <div className='exchange_rates_section'>
      <h2>Dollar to Cedi Exchange Rates Today</h2>  
      <Buttons data={data} buttons={buttons} filterData={filterData}/>
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
                filteredData.map((btn) => (
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



export default Banks