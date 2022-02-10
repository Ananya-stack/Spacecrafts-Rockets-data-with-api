import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { axios } from 'axios';
import { baseUrlSpacecrafts} from '../../api/api'

export const fetchSatellite1 = createAsyncThunk("fetchSatellite1", async()=>{
    try{
        
        const res= await axios.get( baseUrlSpacecrafts)
        return res.data;
    }catch(e){
        console.log(e);
    }
})

const initialState = {
    fetchSatellite_status : "idle",
    fetchSatellite_data : null,

}

const Reducer = createSlice({
    name : "category",
    initialState,
    extraReducers : builders =>{

        builders
        .addCase(fetchSatellite1.pending,state=>{
            state.fetchSatellite_status = "loading";
            state.fetchSatellite_data = null;
        })
        .addCase(fetchSatellite1.fulfilled,(state,{payload})=>{
            state.fetchSatellite_status = "idle"
            console.log(payload);
            // if(payload?.status){
                state.fetchSatellite_data =payload?.genres;
            // }else{
                // state.fetchSatellite_data =[]; 
            // }
        })
        .addCase(fetchSatellite1.rejected,state=>{
            state.fetchSatellite_status="idle"
        })

    }
})



export default Reducer.reducer;