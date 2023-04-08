import React ,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
const Card=({lastname ,college ,nofollower,flw,id,userid})=>{
    const[follower ,setfollower]=useState(flw)
    const followapi = async (follow) => {
      const res = await axios.post("/api/auth/admin/follow", {
        userid,
        id,
        follow
      });
      if (res.status == 200) {
        setfollower(follow);
      }
    };
    return(
        <>

        <div className='   bg-gray-100 rounded-lg py-3 m-1'>
          <div className='flex justify-center items-center mb-1'>

        <Avatar alt="Remy Sharp"    sx={{ width: 70, height: 70 }} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
          </div>
          <div className=' px-2'>
            <p className='text-md '>****** {lastname}</p>
            <p className='text-sm '>{college}</p>
            <p className='text-sm'>{nofollower} Follower</p>
          </div>
          <div className=' flex justify-center mt-2'>
            {
                follower?
                <button type="button" class="text-white bg-gray-600 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>followapi(false)}>UnFollow</button>
 :  <button type="button" class="text-white bg-yellow-600 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>followapi(true)}>Follow</button>
            }
        
          </div>
        </div>
    
        
        </>
    )
}
export default Card;