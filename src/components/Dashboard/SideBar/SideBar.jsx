import React from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';


const SideBarMenu=()=>{
   
    return(
        <>
     
            <div class="_index">
                <div style={{padding:"10px"}}>
              <img height="100%" width="100%" src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png" alt="" srcset="" />

                </div>
                <div className="menu_data ">
                    <div  className="icons">
                <Link to="/">

                    <HomeIcon style={{fontSize:"20px"}}/>
                </Link>
                    </div>

                 
                    <div className="icons">
                    <Link to="Todo">
                
                    <PlaylistAddCheckIcon style={{fontSize:"20px"}}/>
                    </Link>
                    </div>
                                     
                   

                </div>

            </div>





            
        
        </>
    )
}
export default SideBarMenu