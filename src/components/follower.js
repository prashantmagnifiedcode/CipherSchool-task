import React,{useEffect,useState} from 'react'
// import Avatar from '@mui/material/Avatar';
import { useContextState } from "../Redux copy/Global/GlobalContext.js";
import axios from 'axios';
import Card from './card'
const Follower=()=>{
    const[fdata,setfdata]=useState([])
    const[ufdata,setufdata]=useState([])
    console.log(fdata)
  const {  authState } = useContextState();
const userid=authState.UserID
console.log("uid",userid)
useEffect(async()=>{
    const res = await axios.post("/api/auth/admin/follower", {
        id: userid,
      });
      console.log(res.data)
      if(res.status==200){
        setfdata(res.data.follow)
        setufdata(res.data.unfollow)
      }
},[])
    return(
        <>
        <div className='grid lg:grid-cols-7 md:grid-cols-4  grid-flow-col-2 gap-2 p-2 ' >
            {
                fdata?.map((e)=>{
                    return(
<>
<Card lastname={e.profile.lastname} college="dron" nofollower={2} flw={true} id={e._id} userid={userid}/>
</>
                    )
                })
            }
                {ufdata?.map((e)=>{
                    return(
<>
<Card lastname={e.profile.lastname} college="dron" nofollower={2} flw={false} id={e._id} userid={userid}/>
</>
                    )
                })
            }
        </div>
        
        </>
    )
}
export default Follower;