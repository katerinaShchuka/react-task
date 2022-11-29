import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CountryT } from '../types/countries';
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchCountry } from '../redux/countriesSlice';


export default function SingleCountry() {
  const {name} = useParams();

const {country} = useAppSelector((state) => state.countries)
// const countries = useAppSelector((state) => state.cartss)

const dispatch = useAppDispatch()

 useEffect(() => {
    if (typeof name === "string") {
      dispatch(fetchCountry(name))
    }
   }, [name])

  if(country.length === 0) {
return <h1>
        Loading
     </h1>
   }

  return (
    <div>

        <Box
    sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 4,  
        }}
        >
        <ol>
            <li>{country[0].region}</li>
            <li>{country[0].name.official}</li>
            <li>{country[0].capital}</li>
            <li>{country[0].population}</li>
            <li><img src = {country[0].flags.png} /> </li>
            <li> <a href={country[0].maps.googleMaps} target = "_blank"> map <AddLocationAltIcon/></a>
                </li>

        </ol>

        </Box>
    </div>
    
  )
 
}
