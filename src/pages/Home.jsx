import React, {useEffect,useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard/dash'

const Home = () => {
  
  return (
    <>
   < BrowserRouter>
   <Dashboard  />
   </BrowserRouter>

    </>
  );
};

export default Home;
