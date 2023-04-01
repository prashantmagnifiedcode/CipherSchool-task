import React ,{useState}from 'react'
import Tilt from 'react-parallax-tilt';
import { useSelector,useDispatch } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Box from '@mui/material/Box'
import  SideBarMenu from './Dashboard/SideBar/SideBar1'
import { makeStyles } from "@material-ui/core/styles";

import Popper from '@mui/material/Popper';
const Home=()=>{
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const lists =useSelector((state)=>state.todoReducer.list)
  const totalTask=lists.length;
  var completed=0;
   for(let i in lists){
    
    if(lists[i].completed){
      completed++;
    }
   }
   const useStyles = makeStyles((theme) => ({
    grow: {
  
      "& .MuiDrawer-paperAnchorLeft": {
        width:"20%"       
        
      },
    },
    
  }))
  const classes= useStyles()
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpenDrawer(open);
  };
   const list = (anchor) => (
    <>
    <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 70 }}
      className={classes.grow}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      
<div>

  <SideBarMenu/>
</div>

    </Box>
    </>
  );
    return(
        <>
           <div className="relative  bg-indigo-500 h-screen w-screen  overflow-hidden  flex md:justify-around justify-center items-center md:flex-row flex-col overflow-y-auto md:pt-0 pt-10">
     
           <span className=' absolute mt-15 text-9xl text-indigo-400  transform md:rotate-0 rotate-90'>TODO Bashboard</span>
      <Tilt>
        <div className="container h-96 mb-3 mt-3 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <span className='m-1  md:hidden block'>

          <MenuIcon  onClick={toggleDrawer(true)} />
          </span>
           <span className='  text-md text-center text-indigo-400 p-3'>TODO Card</span>
          <div className='h-full flex flex-col justify-center items-center p-3'>
            <div className=' w-full text-xs px-3  my-2 flex justify-between items-center'>

            <p
    //  onChange={(e)=>setregister_name(e.target.value)}
        className=" w-full  font-poppins text-md  text-white "
     
        >Total Task</p>
          <p 
        className="   font-poppins text-lg  text-white "
          
          >{totalTask}</p>
            </div>
            <div className=' w-full text-xs px-3  my-2 flex justify-between items-center'>

            <p
    //  onChange={(e)=>setregister_name(e.target.value)}
        className=" w-full  font-poppins text-md  text-white "
     
        >Remaining Task</p>
          <p
        className="   font-poppins text-lg  text-white "
          
          >{completed}</p>
            </div>
            
          </div>
        </div>
      </Tilt>
    </div>
    <SwipeableDrawer
     anchor={"left"}
     open={isOpenDrawer}
     onClose={toggleDrawer(false)}
     onOpen={toggleDrawer(true)}
   >
    {list("left")}
   </SwipeableDrawer>

        </>
    )
}
export default Home

