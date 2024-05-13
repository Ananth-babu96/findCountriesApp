import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    countries:[],
    mode:'dark'
    
}

const CountrySlice = createSlice({
    name:'countrySlice',
    initialState,
    reducers:{
        fetchCountries(state,action){
            state.countries = [...action.payload]
        },
        changeMode(state){
            state.mode  =  state.mode === 'dark'?'light':'dark'
        }
    }
}
)

export default CountrySlice.reducer

export const {fetchCountries,changeMode} = CountrySlice.actions