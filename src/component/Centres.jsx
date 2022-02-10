import React,{ useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCenter } from '../redux/Reducers/SatelliteSlice'

export default function Centres() {

    const dispatch = useDispatch();
  const { fetchCenter_status, fetchCenter_data } = useSelector( i=> i.space);
  const [selectCenter, setselectCenter] = useState()

  useEffect(() => {
    dispatch(fetchCenter());
}, []);

  return (
    <div>
        
        {
               fetchCenter_status === "loading" && 
               fetchCenter_data === null ? (
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
                   fetchCenter_data?.length>0 ? <>{
                    fetchCenter_data.map(e=>{
                      return <li key={e.id}>
                       {console.log(selectCenter === e.id)}
                      
                       
    
                           {e.id}. {e.name}
                           {e.Place},{e.State}
                        
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


