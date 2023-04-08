import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import GlobalContext from './Redux copy/Global/GlobalContext'

ReactDOM.render(

  <React.StrictMode>
 
 <GlobalContext>
    <App />
  </GlobalContext>
 
    
    
   
  </React.StrictMode>,
  document.getElementById("root")
);