import React, {useEffect,useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard/dash'
import {listtodo} from '../Redux/action/'
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
const Home = () => {
  const dispatch=useDispatch()

  useEffect(async()=>{
    console.log("home")
    const tododata= await axios.get("/api/todo/Notes/FetchNote");
    const adddatat=tododata?.data.map((item)=>{
      return {...item,checked:false}
    })
  

    if(tododata){

      dispatch(listtodo(adddatat))
    }

    },[])
  return (
    <>
   < BrowserRouter>
   <Dashboard  />
   </BrowserRouter>

    </>
  );
};

export default Home;
