import React ,{useState}from 'react'
import {useContextState} from '../Redux copy/Global/GlobalContext.js'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Logins=()=>{
  const [logindata,setlogindata]=useState({email:"",password:""})
  const [register,setregister]=useState({firstname:"",lastname:"",mobile:"",email:"",password:""})
  const [create,setcreate]=useState(false)
  
  const handlechange=(e)=>{
let name= e.target.name;
let value= e.target.value;
setlogindata({...logindata,[name]:value})
  }
  
  const registerhandlechange=(e)=>{
let name= e.target.name;
let value= e.target.value;
setregister({...register,[name]:value})
  }
  console.log(register)

  const { fetchAuthAdmin ,authState} = useContextState();
  const isadmin=authState.WhichUser
  const history= useHistory()
 
  const creatAccount = async (e) => {
    
    e.preventDefault();
    try{

      const res = await axios
        .post(
          " http://localhost:8080/api/auth/admin/register",
          register,
        )
       if(res.status==200){
        alert("added successfully")
       }
    }catch(e){
      console.log(e)
    }
  };
 
  const onSubmit = async (e) => {
    
    e.preventDefault();
    const res = await axios
      .post(
        " http://localhost:8080/api/auth/admin/login",
        logindata,
        {
          withCredentials: true,
        }
      )
      .catch((err) => {
        console.log(err.message);
      });
    if (res?.data) {
      fetchAuthAdmin();
      
      history.push("/",{successfully:"done"})
      
      console.log("res",res);
      return;
      
      
    }
    console.log("Invalid Credentials");
  };
   
    return(
        <>
        
        <div className="bg-white h-full w-full flex justify-center items-center absolute z-10 bg-cl ">
      
        
        <div className="min-h-full  bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        {/* <Link to="/"><CloseIcon className=" absolute z-10 top-4"/></Link>  */}

        {
            create?
            <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
     
    </div>
    <form className="mt-8 space-y-6" onSubmit={creatAccount}>
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="firstname-address " className="sr-only">FirstName</label>
          <input id="firstname-address" name="firstname" 
          type="text" autocomplete="firstname"
          value={register.firstname}
          onChange={registerhandlechange}
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name"/>
        </div>
        <div>
          <label for="lastname-address " className="sr-only">LastName</label>
          <input id="lastname-address" name="lastname" 
          type="text" autocomplete="lastname"
          value={register.lastname}
          onChange={registerhandlechange}
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name"/>
        </div>
        <div>
          <label for="email-address " className="sr-only">Mobile Number</label>
          <input id="mobile-address" name="mobile" 
          type="text" autocomplete="mobile"
          value={register.mobile}
          onChange={registerhandlechange}
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mobile"/>
        </div>
        <div>
          <label for="email-address " className="sr-only">Email address</label>
          <input id="email-address" name="email" 
          type="email" autocomplete="email"
          value={register.email}
          onChange={registerhandlechange}
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" 
          value={register.password}
          onChange={registerhandlechange}type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            <svg className="h-5 w-5 text-yello-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
        <div className="flex items-center justify-center">
      

          <p className="font-medium text-center mt-2 text-gray-600 hover:text-gray-500" > already have an account ?<span onClick={()=>setcreate(false)}> Login</span> </p>
          
          
        
      </div>
      </div>
    </form>
  </div>:
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
     
    </div>
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address " className="sr-only">Email address</label>
          <input id="email-address" name="email" 
          type="email" autocomplete="email"
          value={logindata.email}
          onChange={handlechange}
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" 
          value={logindata.password}
          onChange={handlechange}type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-gray-500"> Forgot your password? </a>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            <svg className="h-5 w-5 text-yello-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
        <div className="flex items-center justify-center">
      

          <p className="font-medium text-center mt-2 text-gray-600 hover:text-gray-500" > Don't have an account ?<span onClick={()=>setcreate(true)}> Get Started</span> </p>
          
          
        
      </div>
      </div>
    </form>
  </div>
        }
</div>
</div>
        </>
    )
}
export default Logins

