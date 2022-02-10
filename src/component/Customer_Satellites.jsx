import React,{ useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCustomerSatellites } from '../redux/Reducers/SatelliteSlice'
import './customer.css'

 const Spacecrafts=()=> {

  const dispatch = useDispatch();
  const { fetchCustomerSatellites_status, fetchCustomerSatellites_data } = useSelector( i=> i.space);
  const [selectSat, setselectSat] = useState()

  useEffect(() => {
    dispatch(fetchCustomerSatellites());
}, []);

  return (
  <div>
      
      {
               fetchCustomerSatellites_status === "loading" && 
               fetchCustomerSatellites_data === null ? (
               <>
               {" "}
               </>
               ) : (
               <>

               <div>
               <ul style={{
                       
                       justifyContent : 'space-evenly',
                       listStyle : 'none'
                   }}>
                 {
                   fetchCustomerSatellites_data?.length>0 ? <>{
                    fetchCustomerSatellites_data.map(e=>{
                      return <li key={e.id}>
                       {console.log(selectSat === e.id)}
                       {/* <card>
                           <h2>{e.id}</h2>
                           <h2>{e.launcher}</h2>
                      <p> {e.country},{e.launch_date}, {e.mass}</p>
                       </card> */}
                       <div className="row">
                       <div className="col">
    
                           <h2>{e.id}</h2>
                           <h2>{e.launcher}</h2>
                           mass: {e.mass}
                      <p> {e.country},{e.launch_date} </p>
    </div>
</div>
                        
                       </li>
                    })
                   }</> : <>no data</>
                 }
                 </ul>
               </div>

               </>
               )}

  </div>
    );
  }
export default Spacecrafts;