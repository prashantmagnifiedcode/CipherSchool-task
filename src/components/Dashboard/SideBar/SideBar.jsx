import React from 'react'
import { Link ,useHistory} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ExploreIcon from '@mui/icons-material/Explore';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupsIcon from '@mui/icons-material/Groups';
import RateReviewIcon from '@mui/icons-material/RateReview';
import TourIcon from '@mui/icons-material/Tour';
import LogoutIcon from '@mui/icons-material/Logout';

import {useContextState} from '../../../Redux copy/Global/GlobalContext.js'
const SideBarMenu=()=>{

    const{logout,authState}=useContextState()
    const history = useHistory()

    const logoutUser = () => {
        logout();
        history.push("/Login");
      };
   
    return(
        <>
     
            <div class="_index relative ">

                <div className="menu_data ">

                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    <HomeIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center' >Home</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    <ImportContactsIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center' >course</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    <ExploreIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center'>Trending</p>
                    </div>
                </Link>
                <Link to="/Follower">
                    <div  className="icons flex justify-center items-center">

                    <GroupsIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center'>Following</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    <GridViewIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center'>Dashboard</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    {/* <HomeIcon style={{fontSize:"22px",color:"black"}}/> */}
<i className='fa fa-discord '></i>

                    <p style={{fontSize:"8px"}} className='text-xs text-center'>Discord</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    <HomeIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center'>Creator Access</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    <RateReviewIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center'>FeedBack</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  className="icons flex justify-center items-center">

                    <TourIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center'>Tour</p>
                    </div>
                </Link>
                <Link to="/">
                    <div  onClick={logoutUser}  className="icons flex justify-center items-center  absolute bottom-2 left-0">

                    <LogoutIcon style={{fontSize:"22px",color:"black"}}/>
                    <p style={{fontSize:"8px"}} className='text-xs text-center'>Logout</p>
                    </div>
                </Link>


                                     
                   

                </div>

            </div>





            
        
        </>
    )
}
export default SideBarMenu