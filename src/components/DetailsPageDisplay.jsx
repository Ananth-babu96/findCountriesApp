import React,{useEffect,useState} from 'react'
import '../styleSheets/DetailsPageDisplay.css'
import { useSelector } from 'react-redux'
const DetailsPageDisplay = ({flag, name,nativeNameObj,population,region,subRegion,capital,tld,borderCountriesArr,currencies,languagesObj,mode}) => {
  const [borders,setBorders] = useState([])
  const nameKeys = Object.keys(nativeNameObj)
  const nativeName = nativeNameObj[nameKeys[0]].official

  const currencyKey = Object.keys(currencies)
  const currncy = currencies[currencyKey[0]].name

  const langKeys = Object.keys(languagesObj)
  const languages = languagesObj[langKeys[0]]

  const stateCountries = useSelector(state=>state.countrySlice.countries)
  
  useEffect(()=>{
      for(let i = 0;i<stateCountries.length;i++){
        for(let j = 0;j<borderCountriesArr?.length;j++){
          if(stateCountries[i].cioc === borderCountriesArr[j]){
            setBorders(prev=>[...prev,stateCountries[i]])
          }
        }
      }
     console.log(borderCountriesArr)
},[])


  return (
    <div className='display'>
      <div className="section1">
        <img src={flag} alt="" />
      </div>
      <div className="section2">
        <h3>{name}</h3>
        <p>Native Name: {nativeName}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Sub Region: {subRegion}</p>
        <p>captial: {capital}</p>
      </div>
      <div className="section3">
          <p>Top Level Domain: {tld}</p>
          <p>Currencies: {currncy}</p>
          <p>Languages: {languages}</p>
          
      </div>
      <div className="section4">
      <p className='borderTitle'>Border Countries: </p>
        <div className={`borderCountries ${mode==='light'?'borderCountriesLight':''}`}>

          {borders?.map((cntry,index)=>{
            return <p key={index}> {cntry.name.official}</p>
})}
        </div>
      </div>
     
      
    </div>
  )
}

export default DetailsPageDisplay









