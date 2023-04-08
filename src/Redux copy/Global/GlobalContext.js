import React,{useReducer,createContext,useContext,useEffect} from 'react'
import auth from '../reducers/auth/auth.jsx'
import axios from 'axios'
const initialState = {
    
    userfirstname:null,
    userlastname:null,
    useremail:null,
    isAuthenticated:false,
    AllDetail:null,
    error: null,
    loading: true,
    UserID:null,
  };
const Global= createContext(initialState)
export const useContextState = () => useContext(Global);

const GlobalContext=({children})=>{

  const[authState,authDispatch]=useReducer(auth,initialState);
  console.log("authistate",authState)

    const fetchAuthAdmin=async()=>{
        await axios.get('http://localhost:8080/api/auth/admin/user',  {
            withCredentials: true
          }).then(res=>{
            if(res?.data){
              console.log("whi",res.data)

              authDispatch({type:"LOGIN",payload:res.data})
            }
          }).catch(err=>{
            authDispatch({type:'Error',error:'Not Authorized'})
          })   
    }

     const logout = async() =>{
      try{
        const res = await axios.delete('http://localhost:8080/api/auth/admin/logout',{
          withCredentials:true
        });
        console.log("res",res)
        if(res.data?.error){
            authDispatch({type:'ERROR',error:res.data.error})
            return;
        }
        authDispatch({type:"LOGOUT"})
      }catch(error){
        authDispatch({type:'ERROR',error:error.message})
      }
  }
  useEffect(() => {
    
    fetchAuthAdmin();
  }, []);
  const value={authState ,fetchAuthAdmin,logout}
    return (
        <>
        <Global.Provider value={value}>{children}</Global.Provider>
        
        </>
    )
}
export default GlobalContext;