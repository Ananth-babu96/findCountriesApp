import { configureStore } from "@reduxjs/toolkit";
import countrySlice from './CountriesSlice'

const store  = configureStore({
    reducer:{
        countrySlice:countrySlice
    }
}
   
)
export default store













