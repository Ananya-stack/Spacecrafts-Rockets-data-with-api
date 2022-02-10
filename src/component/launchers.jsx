import React,{ useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchLauncher } from '../redux/Reducers/SatelliteSlice'

export default function Launchers() {

  const dispatch = useDispatch();
  const { fetchLauncher_status, fetchLauncher_data } = useSelector( i=> i.space);
  const [selectLaunch, setselectLaunch] = useState()

  useEffect(() => {
    dispatch(fetchLauncher());
}, []);
  


  return (
    <div>
      
    {
             fetchLauncher_status === "loading" && 
             fetchLauncher_data === null ? (
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
                 fetchLauncher_data?.length>0 ? <>{
                  fetchLauncher_data.map(e=>{
                    return <li key={e.id}>
                     {console.log(selectLaunch === e.id)}
                     <p >{e.id}</p></li>
                  })
                 }</> : <>xxxx</>
               }
               </ul>
             </div>

             </>
             )}

</div>
    );
}
