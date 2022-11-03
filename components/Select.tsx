import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import AsyncCreatableSelect from 'react-select/async-creatable'
import AsyncSelect from 'react-select/async';
import { ColourOption, colourOptions } from './datakk/data';
import axios from 'axios';

const filterColors = (inputValue: string) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const getUser = () =>{
  axios.get("//localhost:4000/users")
  .then(
    (response)=>{
      const userslist = response.data.users
      console.log(userslist)
  })
  .catch(
    (error)=>{
      console.log(error)
    }
  )
}

const promiseOptions = (inputValue: string) =>
  new Promise<ColourOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export const Meupinto = () =>{
  return(
  <div className="sel">
    <AsyncCreatableSelect
    isMulti
    cacheOptions
    defaultOptions
    loadOptions={promiseOptions}
  />
  <button onClick={getUser}></button>
  </div>
  )
}
