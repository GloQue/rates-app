import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Table({filteredData}) {
 
  return (
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
              filteredData.map((item) => (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
  )
}

export default Table