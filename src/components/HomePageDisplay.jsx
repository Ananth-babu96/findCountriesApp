import React from 'react'
import '../styleSheets/HomePageDisplay.css'
import {Link, useParams} from 'react-router-dom'


const HomePageDisplay = ({flag,name,population,capital,region,mode}) => {
  const id = useParams()
  return (
    <Link to={`/country/${name}`} style={{all:'unset'}}>
    <div className={`displayCountryDetails ${mode === 'light'?'detailsLight':''}`}>
      <div className="flag">
        <img src={flag} alt="" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>population: {population}</p>
        <p>region: {region}</p>
        <p>capital: {capital}</p>
      </div>
      
    </div>
    </Link>
  )
}

export default HomePageDisplay
/*<img src={flag} alt="" />
      <div className="details">
      <h3>{name}</h3>
      <p>population: {population}</p>
      <p>region: {region}</p>
      <p>capital: {capital}</p>
      </div>*/