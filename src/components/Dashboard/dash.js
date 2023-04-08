import React from "react";
import "./dashs.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBarMenu from "./SideBar/SideBar";
import {useContextState} from '../../Redux copy/Global/GlobalContext.js'
import {Redirect} from 'react-router-dom'

import Follower from '../follower'
import Home from '../home'
import Header from './header/'
import Logins from '../login'
const Dashboard = () => {
  
  const  { authState}=useContextState()
  const auth= authState.isAuthenticated
  console.log("auth",auth)
  return (
    <>
      <Router>
        <Switch>
          {
            auth?
            
  
           <Header>
          <div className="containers    ">

            {
              auth&&
  <SideBarMenu  />
            }
              
            
                
            <div className="Access ">
             

  
              <Route exact path="/"
                  render={ () => (auth ? <Home /> : <Redirect to="/Login" />)}
              
              />
                {/* <Route exact path="/" render={() => < Home />} /> */}
                <Route exact path="/Follower" render={() => < Follower />} />
                <Route exact path="/Login" render={() => < Logins />} />
              
           
            </div> 
          </div>
            </Header> :
            
            <Route exact path="/" render={() => < Logins />} />
              
            
          }
        </Switch>
      </Router>
    </>
  );
};
export default Dashboard;
