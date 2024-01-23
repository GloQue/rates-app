import React from "react";
import { NavLink } from "react-router-dom";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FILTER_BY_CATEGORY } from "../store/actions";
// import { FILTER_BY_CATEGORY } from '../store/actions';

function Buttons({ buttons, filterData}) {
  const dispatch = useDispatch();

 
const links = ['exchangerates', 'forex-bureaus', 'remittance', 'crypto', 'fintechs', 'banks', 'online-payments']

  return (
    <div>
      <div className="rates_btns_container">
        {buttons.map((btn, index) => (
          <button className="rate_buttons" key={btn._id} onClick={() => filterData(btn)}>
            <NavLink to={`/${links[index]}`}>{btn}</NavLink>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
