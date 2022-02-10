import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

import { baseUrl } from '../../api/api'

// spacecrafts
export const fetchSpace = createAsyncThunk("fetchSpace", async()=>{
try{
const url = `${baseUrl}api/spacecrafts`
const res= await axios.get(url)
return res.data;
}catch(e){
console.log(e);
}
})

// launcher
export const fetchLauncher = createAsyncThunk("fetchLauncher", async()=>{
try{
const url = `${baseUrl}api/launchers`
const res= await axios.get(url)
return res.data;
}catch(e){
console.log(e);
}
})

//Customer Satellites
export const fetchCustomerSatellites = createAsyncThunk("fetchCustomerSatellites", async()=>{
    try{
    const url = `${baseUrl}api/customer_satellites`
    const res= await axios.get(url)
    return res.data;
    }catch(e){
    console.log(e);
    }
    })

// centers
export const fetchCenter = createAsyncThunk("fetchCenter", async()=>{
try{
const url = `${baseUrl}api/centres`
const res= await axios.get(url)
return res.data;
}catch(e){
console.log(e);
}
})


const initialState = {
fetchSpace_status : "idle",
fetchSpace_data : null,
fetchLauncher_status: "idle",
fetchLauncher_data : null,
fetchCustomerSatellites_status: "idle",
fetchCustomerSatellites_data : null,
fetchCenter_status: "idle",
fetchCenter_data : null,
}

const satelliteSlice = createSlice({
name : "category",
initialState,
extraReducers : builders =>{

builders
.addCase(fetchSpace.pending,state=>{
state.fetchSpace_status = "loading";
state.fetchSpace_data = null;
})
.addCase(fetchSpace.fulfilled,(state,{payload})=>{
state.fetchSpace_status = "idle"
console.log(payload);
// if(payload?.status){
state.fetchSpace_data =payload?.spacecrafts;
// }else{
// state.fetchSpace_data =[];
// }
})
.addCase(fetchSpace.rejected,state=>{
state.fetchSpace_status="idle"
})

// launcher
.addCase(fetchLauncher.pending,(state)=>{
state.fetchLauncher_status = "loading";
state.fetchLauncher_data = null;
})
.addCase(fetchLauncher.fulfilled,(state,{payload})=>{
state.fetchLauncher_status = "idle"
// console.log(payload);
state.fetchLauncher_data =payload?.launchers;
})
.addCase(fetchLauncher.rejected,state=>{
state.fetchLauncher_status="idle"
})

//Customer-Satellites
.addCase(fetchCustomerSatellites.pending,(state)=>{
    state.fetchCustomerSatellites_status = "loading";
    state.fetchCustomerSatellites_data = null;
    })
    .addCase(fetchCustomerSatellites.fulfilled,(state,{payload})=>{
    state.fetchCustomerSatellites_status = "idle"
    state.fetchCustomerSatellites_data =payload?.customer_satellites;
    })
    .addCase(fetchCustomerSatellites.rejected,state=>{
    state.fetchCustomerSatellites_status="idle"
    })

// centers
.addCase(fetchCenter.pending,(state)=>{
state.fetchCenter_status = "loading";
state.fetchCenter_data = null;
})
.addCase(fetchCenter.fulfilled,(state,{payload})=>{
state.fetchCenter_status = "idle"
state.fetchCenter_data =payload?.centres;
})
.addCase(fetchCenter.rejected,state=>{
state.fetchCenter_status="idle"
})


}
})



export default satelliteSlice.reducer;