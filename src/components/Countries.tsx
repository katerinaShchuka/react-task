import React from "react";
import { CountryItem } from "../types/countries";
import "../styles/countries.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hooks";
import { add } from "../redux/cartSlice";


type Props = {
  countries: CountryItem[];
};

const Countries = ({ countries }: Props) => {

  const dispatch = useAppDispatch()
  return (
    <>
      <table>
        <thead id="title">
          <tr>
            <th id="titleFlag">
              <h4>Flag</h4>
            </th>
            <th>
              <h4>Country name</h4>
            </th>
            <th>
              <h4>Capital</h4>
            </th>
            <th id="titleFlag">
              <h4>Population</h4>
            </th>
            <th id="titleFlag">
              <h4>Region</h4>
            </th>
            <th id="titleFlag">
              <h4>Google Map</h4>
            </th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country) => (
            <tr key={country.name.official}>
              <th>
                <img src = {country.flags.png} alt={country.name.official} />
                </th>
              <th>
                <Link to={`country/${country.name.official}`}>{country.name.official}</Link>
              </th>
              <th>{country.capital}</th>
              <th>{country.population}</th>
              <th>{country.region}</th>
              <th>
               <a href={country.maps.googleMaps} target = "_blank"> map <AddLocationAltIcon/></a>
              </th>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Countries;
