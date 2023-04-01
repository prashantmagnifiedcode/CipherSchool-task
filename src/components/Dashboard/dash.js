import React from "react";
import "./dashs.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBarMenu from "./SideBar/SideBar";

import Todo from '../Todo/Todo'
import Home from '../home'
const Dashboard = ({Total,Completed}) => {
  
  return (
    <>
      <Router>
        <Switch>
          <div className="containers    ">
            

            
  <SideBarMenu  />
              
            
                
            <div className="Access ">
             

  
              {/* <Route exact path="/Login" render={() => <Logins/>} /> */}
                <Route exact path="/" render={() => < Home Total={Total} Completed={Completed}/>} />
                <Route exact path="/Todo" render={() => < Todo />} />
              
           
            </div> 
          </div>
        </Switch>
      </Router>
    </>
  );
};
export default Dashboard;
