import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCountries, search } from '../redux/countriesSlice';
import { CountryItem, CountryT } from '../types/countries';
import Countries from './Countries';
// import "../styles/filter.css";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, InputAdornment, TextField } from '@mui/material';



export default function CountryList()  {


 const dispatch = useAppDispatch()
    const {loading, countries, filtered } = useAppSelector((state) => state.countries)


const [input, setInput] = useState("")

  useEffect(() => {
     dispatch(fetchCountries())
   }, [dispatch]);

   let renderedCountries = filtered.length > 0 ? filtered : countries

  return (
  <div>

      <TextField
sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4, m: 2,
        }}
          label= {`Filter`}
          variant="outlined"
          type="text"
           color="primary"
      InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FilterAltIcon />
            </InputAdornment> )}}
      
      value={input} 
      
      onChange={
    (e: any) => {
 setInput(e.target.value)
dispatch(search(input))
 }
    } 
 

/>
    {loading ? <h1>Loading</h1> : <Countries countries = {renderedCountries} />}
 
     </div>
  )
} 


