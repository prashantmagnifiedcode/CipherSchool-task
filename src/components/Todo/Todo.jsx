import React ,{useState,useEffect}from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import CustomizedInputBase from '../User/search'
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import SortIcon from '@mui/icons-material/Sort';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TodoAdd from './Add'
import { makeStyles } from "@material-ui/core/styles";
import { Reorder } from "framer-motion/dist/framer-motion"
import  Modal  from "./Modal"

import VisibilityIcon from '@mui/icons-material/Visibility';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from "axios";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import {  TextField,} from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import {addtodo,deletetodo,removetodo,updatedtodo} from '../../Redux/action/'

// import Notify from '../Notification/Toaster.js'
const useStyles = makeStyles((theme) => ({
  grow: {
   
    "& .MuiDrawer-paperAnchorRight": {
      // width:"30%",
      backgroundColor: "#161a1d",
    },
  },
  
}))
const useRowStyles = makeStyles({
  root: {
    backgroundColor: "#white",
    "& > *": {
      borderBottom: "unset",
      padding: "4px",
      textAlign: "center",
      fontSize: "13px",
    },
    "& .MuiTableCell-head": {
      fontWeight: "600",
      textTransform: "uppercase",
    },
  },
});
const Rows=(props)=>{
   const{dispatch,indx,index ,item,checked,handleOnChange,completed}=props;
   console.log("pr row",indx,index)

   const del=async(id)=>{
     dispatch(deletetodo(id)) 
    const res= await axios.delete(`/api/todo/Note/DeleteNotes/${id}`)
    if(res.status==200){
    }
   }
   const cmpt=async(id,completed)=>{
     const res= await axios.patch("/api/todo/Note/UpdateNotes",{id,completed})
     if(res.status==200){
       dispatch(updatedtodo(id)) 
       
      console.log("done")
    }
   }
   const updatepostion=async(id,index)=>{
     const res= await axios.patch("/api/todo/Note/UpdatePosition",{id,index})
     if(res.status==200){
      //  dispatch(updatedtodo(id)) 
      console.log("done")
    }
   }
   useEffect(()=>{
      updatepostion(indx,index)
   },[index])
  
  return(
    <>
   
            <div className=
            {
              completed?
              "w-full flex justify-between items-center  text-md px-3 h-10 my-1 outline-none rounded-md border text-white bg-gradient-to-br from-green-300 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-green-700 focus:shadow-sm"
                :
              "w-full flex justify-between items-center  text-md px-3 h-10 my-1 outline-none rounded-md border focus:shadow-sm"

            }
              >
                <div className="ml-2 flex items-center justify-center  ">

                <input
                    type="checkbox"
                    className="rounded-lg"
        
                    name={indx}
                    value={checked}
                    
                    
                    checked={checked}
                    onChange={() =>handleOnChange(indx)}
        
          />
                <div className="ml-2">

            <p className="text-xs">{item?.title}</p>
                </div>
                </div>
                <div>

            <p className="text-xs">{item?.Description}</p>
                </div>
           
                <div>
                  
  <LibraryAddCheckIcon className={completed?"text-green-500":"text-gray-300"} style={{fontSize:18}} onClick={()=>
 cmpt(indx,completed)
    }/>
  
  <DeleteOutlineOutlinedIcon style={{fontSize:18,margin:"0px 2px"}} className=" text-red-500" onClick={()=>
del(indx)
    }/>
  {/* <ModeOutlinedIcon style={{fontSize:18}}  className=" text-green-500"/> */}
                    </div>
           
               
           
                </div>

       
    </>
  )
}
const Todo = () => {
  const lists =useSelector((state)=>state.todoReducer.list)
  const [data,setdata]=useState()
  
  const dispatch =useDispatch()
  console.log("list",lists)
  const [AllUser,setAllUser]=useState()
  const classes= useStyles()
  const [checkedState, setCheckedState] = useState();
  const [FinshedTask, setFinshedTask] = useState(false);
  const[render,setRender]=useState(false)
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
 
 console.log("user",checkedState)
 useEffect(async()=>{
   console.log("update")
  setdata(lists)
 },[lists])
  

  const handleOnChange = (checked_id) => {
    console.log("checked",checked_id)
    const updatedCheckedState = data.map((item, index) =>
      item._id === checked_id ? {...item , checked:!item.checked }: item
    );
     console.log("gi",updatedCheckedState)
     setCheckedState(updatedCheckedState?.filter((e)=> e.checked===true ))

    setdata(updatedCheckedState);

  };
  
  
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'auto' }}
      className={classes.grow}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <TodoAdd AllUser={AllUser}/>

    </Box>
    </>
  );
  const SelectedDlt=async()=>{
    console.log("delete all",checkedState)

     const res= await axios.post("/api/todo/Note/DeleteSelectedNotes/",checkedState)
     if(res.status==200){
      alert("Dleted ")
      window.location.reload()
     }
     console.log("delete all",checkedState)
  }

  return (
    <>
    {/* <Notify/> */}
       
      <div className=" w-full   h-screen p-2  grid md:grid-cols-5 gap-2 sm:grid-cols-1  ">
    
        <div className=" grid md:grid-col-1 ">
            <div className=" grid gid-row-1 gap-2 ">
              <div className=" relative bg-white pl-1  rounded-lg border-2 border-gray-500">
          
            <>
         
            {/* <div className="absolute top-0 w-1/4 bg-indigo-500 h-full "
            style={{zIndex:0}}
            >
            
            </div> */}
          <div  className=" w-full  "  >
               {/* <CustomizedInputBase /> */}
    
              </div>
          <div className=" flex w-full justify-center pt-3 mb-5 "  >
                 <div className="bg-indigo-500  w-1/2 rounded-lg p-3 flex justify-center hover:bg-indigo-300 font-sans text-md font-bold">

            <button type="submit"  onClick={toggleDrawer(true)}  >ADD</button>
          </div>
          </div>

          <div className=" gap-5"  s>
            <div className=" mb-2 pt-2 pb-2 border-l-2  hover:text-indigo-300  hover:border-blue-600 ">
              <div className=" grid grid-cols-4 item-center ">
                <div className=" grid justify-center  text-md">
                  <EmailOutlinedIcon  style={{fontSize:"17px"}}/>
                </div>
                <p className="grid col-span-3 text-md  font-bold " onClick={()=>setFinshedTask(false)}>My Task</p>
              </div>
            </div>

            <div className="mb-2 pt-2 pb-2 border-l-2  hover:text-indigo-300  hover:border-blue-600 ">
              <div className=" grid grid-cols-4  " onClick={()=>SelectedDlt()}>
                <div className=" grid justify-center">
                  <DeleteOutlineIcon  style={{fontSize:"17px"}} />
                </div>
                <p className="col-span-3 text-md font-bold">Delete</p>
              </div>
            </div>
          </div>
          </>
          
          </div>
          </div>
        </div>
        <div className="bg-white  md:col-span-4 sm:col-span-0 rounded-lg p-1 ">
      



            
        
       
        <Reorder.Group axis="y" values={data} onReorder={setdata}>
       
       {data?
       
       
       
       data?.map((item,index) =>( 
  

               <Reorder.Item key={item._id} value={item}>
                
                <Rows 
                key={item._id}
                 indx={item._id}
                  index={index} 
                   item={item.data}
                  handleOnChange={handleOnChange}
                  dispatch={dispatch}
                   checked={item.checked}
                   completed={item.completed}
                    />
              </Reorder.Item>
              
             )) 
             :null
            }
             
            
             </Reorder.Group>



          </div>
      </div>
 
      <SwipeableDrawer
     anchor={"right"}
     open={isOpenDrawer}
     onClose={toggleDrawer(false)}
     onOpen={toggleDrawer(true)}
     
   >
    {list("right")}
   </SwipeableDrawer>
    </>
  );
};
export default Todo;

