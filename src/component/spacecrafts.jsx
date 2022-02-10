import React,{ useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchSpace } from '../redux/Reducers/SatelliteSlice'

 const Spacecrafts=()=> {

  const dispatch = useDispatch();
  const { fetchSpace_status, fetchSpace_data } = useSelector( i=> i.space);
  const [selectSat, setselectSat] = useState()

  useEffect(() => {
    dispatch(fetchSpace());
}, []);


  return (
  <div>
      
      {
               fetchSpace_status === "loading" && 
               fetchSpace_data === null ? (
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
                   fetchSpace_data?.length>0 ? <>{
                    fetchSpace_data.map(e=>{
                      return <li key={e.id}>
                       {console.log(selectSat === e.id)}
                       <p>{e.id}. {e.name}</p>
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