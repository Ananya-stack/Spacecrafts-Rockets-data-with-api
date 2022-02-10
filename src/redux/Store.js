import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Reducers/Reducer';
import satelliteSlice from './Reducers/SatelliteSlice';


const Store = configureStore({
    reducer : {
        space : satelliteSlice,
        reducers : Reducer
    }
})
export default Store;