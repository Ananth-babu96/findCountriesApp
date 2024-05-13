import React ,{useState,useEffect} from 'react'
import HomePageDisplay from '../components/HomePageDisplay'
//stylesheet import----------------------------
import '../styleSheets/HomePage.css'

//store imports---------------------------------
import { useSelector,useDispatch } from 'react-redux'
import { fetchCountries , changeMode} from '../GlobalStates/CountriesSlice';

//icons import--------------------------------------
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";



const HomePage = () => {
  //states----------------------
  const [text,setText]  = useState('')
  const [countriesToShow,setCountriesToShow] = useState([])
  const [region,setRegion] = useState('')
  const [showRegionMenu,setShowRegionMenu ] = useState('hide')


  const dispatch = useDispatch()

 //useEffect-------------------------------
 useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>{
    dispatch(fetchCountries(data))
    setCountriesToShow(data)
 }
  )

},[])


  const countries = useSelector(state=>state.countrySlice.countries)
 const mode = useSelector(state=>state.countrySlice.mode)
  
  //EventHandlers------------------------------------

  const handleMode =()=>{
    dispatch(changeMode())

  }
  
  const handleChange =(e)=>{
    setText(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setCountriesToShow(countries.filter(country=>country.name.common.toLowerCase() === text.toLowerCase() || country.name.official.toLowerCase() === text.toLowerCase()))
    setText('')
  }

  const handleBackHome =()=>{
    setCountriesToShow(countries)
  }
   const   handleRegion= (prop)=>{

    setRegion(prop)
    setCountriesToShow(countries.filter(country=>country.region === prop))
  }
  const handleShowMenu = ()=>{
    setShowRegionMenu(showRegionMenu === 'hide'?'show':'hide')
  }
  return (
    <div className={`homepage ${mode==='light'?'lightHomepage':''}`}>
        <div className={`navbar ${mode==='light'?'lightNavbar':''}`}>
          <ul>
            <li className='homeBtn' onClick={handleBackHome}><p>Where in the world</p></li>
            <li className={`inputField ${mode==='light'?'lightInputField':''}`}><form onSubmit={handleSubmit}> <input type="text" onChange={handleChange}  value={text} placeholder='Search for a country...'/></form></li>
            <li className={`filterField ${mode === 'light'?'lightFilterField':''}`}>
              <div onClick={handleShowMenu}>
                <p>{`${region === ''?'Filter by Region':region}`}</p> 
                <p className={`dropDownIcon ${showRegionMenu === 'show'?'invertIcon':''}`}><IoIosArrowDown/></p>
                <div className={`regions ${showRegionMenu==='show'?'showMenu':''}`}>
                  <p onClick={()=>handleRegion('Africa')}>Africa</p>
                  <p onClick={()=>handleRegion('Americas')}>America</p>
                  <p onClick={()=>handleRegion('Asia')}>Asia</p>
                  <p onClick={()=>handleRegion('Europe')}>Europe</p>
                  <p onClick={()=>handleRegion('Oceania')}>Oceania</p>
                </div>
              </div>
            </li>
            <li className='modeSwitch'><div onClick={handleMode}>{mode === 'dark'?<FaMoon/>:<FaSun/>}</div></li>
          </ul>
        </div>
        <div className='countriesBox'>

          {countriesToShow.map((country,index)=>{
            return <div key={index} >
              <HomePageDisplay flag={country.flags.png} name={country.name.official} population={country.population} region={country.region} capital={country.capital} mode={mode}/>
            </div>
})}

        </div>
      
    </div>
  )
}

export default HomePage
