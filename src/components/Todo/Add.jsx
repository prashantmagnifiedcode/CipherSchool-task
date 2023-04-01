import React,{useState} from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import axios from 'axios'
import Button from "@mui/material/Button";
import {addtodo,deletetodo,removetodo} from '../../Redux/action/'
import { useDispatch } from 'react-redux';
import './todo.css'
const TodoAdd=({AllUser})=>{
  const dispatch=useDispatch()
  const [recordData, setRecordData] = useState({
    title: "", 
    Description: "",
 
  });
  
  console.log(recordData)
  const handlechange=(e)=>{
    let name= e.target.name;
    let value= e.target.value
   
      setRecordData({...recordData,[name]:value})
    
   }
  
   const Created=async()=>{
     
    const res=await axios.post("/api/todo/Notes",recordData);
    
       if(res.status==200){
        dispatch(addtodo(recordData))
         setRecordData({ title: "", 
         Description: "",
         })
       }
       
   }
    return (
        <>
       
        
        <div className= "  h-screen w-full   grid  grid-flow-col  ">
         
       
         
          <div className="h-full bg-white  shadow-lg   ">
                
                
                <div className=" h-15 w-full    grid grid-flow-col p-2 " style={{ background:"#6366f1"}}>
              
                   <div className="flex items-center pl-2  text-md  text-white"><p>Add Task</p></div>
                    <div className="col-start-3 ">
                      <div className="flex w-full h-full justify-end pr-2  items-center ">
                      <StarBorderOutlinedIcon className="text-yellow-500 m-3" />
                     
                      </div>
                      </div>
                  </div>

              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div>
                       <div className="pl-3  text-gray-500 ">

                       <label>Title</label>
                       </div>
                       <div  className="flex justify-center">

                          <input type="text"
     placeholder="Enter Your Register Name"
     label="title" name="title"
    //  onChange={(e)=>setregister_name(e.target.value)}
        className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
        value={recordData.title}
        onChange={handlechange}
        />
   
                       </div>
                       </div>
             </div>


             

              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div>
                       <div className=" pl-3  text-gray-500 ">

                       <label>Description</label>
                       </div>
                       <div   className="flex justify-center  ">

                       {/* <textarea  id="outlined-basic border-red-500" label="Product" variant="outlined" className="w-5/6  border-2 border-gray-300 rounded-lg" sx={{height:"20%"}} 
                       name="Description"
                       value={recordData.Description} onChange={handlechange}
                       
                       /> */}
                       <textarea 
    label="Description" 
    name="Description"
    value={recordData.Description} onChange={handlechange}
    style={{
      width: "98.8%",
      margin: "1rem 0.7rem",
    }}
    
     className="w-full text-xs px-3 py-2 h-20  outline-none rounded-md border focus:shadow-sm resize-none"
    ></textarea>


                       </div>
                       </div>
             </div>
              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div className="grid grid-flow-col w-1/2   gap-4 ">
                     <Button variant="contained" 
                     style={{background:"#6366f1",fontSize:"13px",borderRadius:"5px",color:"#fff"}}
                     onClick={()=>Created()}
                     >Add</Button>

                     </div>
                
             </div>


                
         
            </div>
        
        
        </div>


        </>
    )
}
export default TodoAdd;