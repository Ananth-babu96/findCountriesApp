import React from 'react'
import { useSelector } from 'react-redux'
import DetailsPageDisplay from '../components/DetailsPageDisplay'
import { useParams } from 'react-router-dom'
import '../styleSheets/DetailsPage.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

const DetailsPage = () => {
  const countries = useSelector(state=>state.countrySlice.countries)
  const mode  = useSelector(state=>state.countrySlice.mode)
  const id = useParams()

    const thisCountry = countries.filter(country=>country.name.official === id.id)

  return (
    <div className={`detailspage ${mode === 'light'?'detailspageLight':''}`}>
    <Link to='/' style={{all:'unset' ,cursor:'pointer'}}><button className={`backButton ${mode==='light'?'backButtonLight':''}`}><div><FaLongArrowAltLeft/> <span>back</span></div>  </button></Link>
    <div className='countryDetails'>
     {thisCountry.map((cntry,indx)=>{
      return <DetailsPageDisplay flag={cntry.flags.png} name={cntry.name.official} nativeNameObj = {cntry.name.nativeName} population={cntry.population} region={cntry.region} subRegion={cntry.subregion} capital={cntry.capital} tld={cntry.tld} borderCountriesArr={cntry.borders} currencies = {cntry.currencies} languagesObj = {cntry.languages} mode ={mode}/>
})}
     </div>
    </div>
  )
}

export default DetailsPage
