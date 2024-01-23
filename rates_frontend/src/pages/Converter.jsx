import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CONVERT_DOLLAR_TO_CEDI } from '../store/actions'

function Converter() {
  const dispatch = useDispatch()
  const convertedValue = useSelector(state => state.amount.amount)
  console.log(convertedValue)

  const [amount, setAmount] = useState('')

  // const collectAmountValue = setAmount((event) => event.target.value)

  const convertAmount = (event) => {
    event.preventDefault()

    dispatch({type: CONVERT_DOLLAR_TO_CEDI, payload: Number(amount)})

    setAmount('')
  }

  return (
    <section className='converter_section'>
      <div className='converter_top'>
        <div className='converter_heading_section'>
          <h1>Convert US Dollar to Ghanaian Cedi</h1>
          <p>CediRates Currency Converter</p>
        </div>

        <form onSubmit={convertAmount} className='converter_form'>  
          <div className='converter_input_section'>
            <div>
              <label htmlFor="amount">Amount</label>
              <input type="text" id='amount' value={amount} onChange={(event) => setAmount(event.target.value)}/>
            </div>
            <div>
              <label htmlFor="dollar">From</label>
              <input type="text" id='dollar' />
            </div>
            <div>
              <label htmlFor="cedi">To</label>
              <input type="text" id='cedi' />
            </div>
          </div>
          <div className='converter_button_container'>
            <button type='submit'>Convert</button>
          </div>  

          <div>
            <p>{convertedValue}</p>
          </div>
        </form>
      </div>
      
    </section>
  )
}

export default Converter