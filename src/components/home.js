import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
// import GitHubCalendar from 'react-github-calendar';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ActivityCalendar } from "activity-calendar-react";
import { useContextState } from "../Redux copy/Global/GlobalContext.js";
import axios from "axios";
import Modal from "./modal";
const Home = () => {
  const { fetchAuthAdmin, authState } = useContextState();
  const { userfirstname, userlastname, useremail, AllDetail, UserID } =authState;
  const { LinkedIn, Facebook, Instagram, Twitter, website, GitHub } =AllDetail?.ProfileLinks;
  const { firstname,lastname,email,mobile } =AllDetail?.profile;
  const { Education,Currently } =AllDetail?.Prof;

  const [Web, setWeb] = useState({
    LinkedIn,
    Facebook,
    Instagram,
    Twitter,
    website,
    GitHub,
  });
  const [WebEdit, setWebEdit] = useState(false);

  const [Profile, setProfile] = useState({
    firstname,lastname,email,mobile
  });

  const [openPopup, setopenPopup] = useState(false);
  const [profile, setprofile] = useState(false);
  const [interest, setinterest] = useState(false);
  const [open, setOpen] = useState(false);
  const [images, setimages] = useState('');
 console.log(images)
  const [About, setAbout] = useState(AllDetail?.About);
  const [editAbout, seteditAbout] = useState(false);

  const [Prof, setProf] = useState({Education,Currently});
  const [editProf, seteditProf] = useState(false);
  // console.log(Prof);
  const [Passwords, setPasswords] = useState({
    Cur:"",New:"",Confirm:"",
  });
  const [PasswordsError, setPasswordsError] = useState("");
  const [Interest, setInterest] = useState([
    {id:1,value:"DSA",take:false},
    {id:2,value:"Java",take:false},
    {id:3,value:"C++",take:false},
  ]);
  console.log(Passwords);

  const sampleData = [
    {
      day: "2023-01-01",
      activity: 5,
    },
    {
      day: "2023-01-02",
      activity: 1,
    },
  ];
  const colorCustomization = {
    activity0: "#dadada",
    activity1: "#0e4429",
    activity2: "#006d32",
    activity3: "#26a641",
    activity4: "#39d353",
  };
  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const Webhandlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setWeb({ ...Web, [name]: value });
  };
  
  const profhandlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProf({ ...Prof, [name]: value });
  };
  const profilehandlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfile({ ...Profile, [name]: value });
  };
  const Passwordhandlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPasswords({ ...Passwords, [name]: value });
  };
 
  const aboutapi = async () => {
    const res = await axios.post("/api/auth/admin/about", {
      id: UserID,
      About,
    });
    if (res.status == 200) {
      seteditAbout((prev) => !prev);
    }
  };
  const Webapi = async () => {
    const res = await axios.post("/api/auth/admin/ProfileLink", {
      id: UserID,
      Web,
    });
    if (res.status == 200) {
      setWebEdit((prev) => !prev);
    }
  };
  const profapi = async () => {
    const res = await axios.post("/api/auth/admin/Professional", {
      id: UserID,
      Prof,
    });
    if (res.status == 200) {
      seteditProf((prev) => !prev);
    }
  };
  const UpdatePwdapi = async () => {
    if(Passwords.New!=Passwords.Confirm){
      setPasswordsError("passwor shu match")
    }else if(Passwords?.Confirm.length>=6){
      setPasswordsError("Password should be above 6 length")
    }
    else{

      const res = await axios.post("/api/auth/admin/updatePassword", {
        id: UserID,
       password: Passwords.Confirm,
      });
      if (res.status == 200) {
        seteditProf((prev) => !prev);
      }
    }
  };
  const updateProfile = async (e) => {

     console.log({...Profile,images})
     if(images){

       const res = await axios.post("/api/auth/admin/updateProfile", {
         id: UserID,
        Profile:{...Profile,images}
       });
       if (res.status == 200) {
         setprofile((prev) => !prev);
       }
     }
    
  };
  const interesthandle = async (id) => {
   const val= Interest.map((e)=> e.id==id? {...e,take:!e.take}:e)
   setInterest(val)
  };
  const interestapi=async()=>{
     const interestdata=Interest.filter((e)=>e.take==true);

     console.log(interestdata)
    const res = await axios.post("/api/auth/admin/interest", {
      id: UserID,
      interestdata
    });
    if (res.status == 200) {
      setinterest((prev) => !prev);
    }
  }
  return (
    <>
      <div className=" h-32 z-10 grid grid-cols-2 profile py-3">
        <div className="flex md:ml-10 ml-3 items-center ">
          <div className="relative">
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 70, height: 70 }}
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
            />

            <div
              className="absolute bottom-0 right-0 bg-white rounded-full flex justify-center items-center"
              onClick={() => setprofile(true)}
            >
              <ModeEditOutlineIcon
                style={{ fontSize: "20px", padding: "2px" }}
              />
            </div>
          </div>
          <div className="ml-2">
            <p style={{ color: "#2c3d4f" }} className="  md:text-xl text-md">
              Hello
            </p>
            <p style={{ color: "#2c3d4f" }} className=" font-bold md:text-2xl text-lg">
              {Profile.firstname} {Profile.lastname}
            </p>
            <p style={{ color: "#2c3d4f" }} className="  md:text-xl text-lg ">
              {Profile.email}
            </p>
          </div>

          <div></div>
        </div>
        <div className="flex justify-end items-center mr-3 md:mt-0 -mt-20">
          <p className="text-lg "><span className="font-bold">{AllDetail?.follower.length}</span> Follower</p>
        </div>
      </div>
      <Modal setopenPopup={setprofile} openPopup={profile} closeShow={false}>
        

        <div className="flex md:flex-row flex-col relative">
          <p className="absolute top-0 font-bold ">Profile Update</p>
          <div className="flex  justify-center items-center p-2 md:mt-0 mt-8 ">
            <div className="relative">
           
<div class="profile-pic">
  <label class="-label" for="file">
    <span class="glyphicon glyphicon-camera"></span>
    <span>Change Image</span>
  </label>
  <input id="file" type="file" onChange={(e)=>setimages(e.target.files[0])}/>

  <img src={images?URL.createObjectURL(images):"https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"} 
  
  id="output" width="200" />
</div>
            </div>
          </div>
          <div className="flex flex-col px-10 py-3 w-full">
            <div className="flex flex-col">
              <label>Name</label>

              <div className=" relative w-full">
                <input
                  type="text"
                  value={Profile.firstname}
                  name="firstname"
                  onChange={profilehandlechange}
                  placeholder="Enter your password"
                  className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>LastName</label>

              <div className=" relative w-full">
                <input
                  type= "text"
                  value={Profile.lastname}
                   name="lastname"
                   onChange={profilehandlechange}
                  placeholder="Enter your password"
                  className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Email</label>

              <div className=" relative w-full">
                <input
                  type="email"
                  value={Profile.email}
                  name="email"
                  onChange={profilehandlechange}
                  placeholder="Enter your password"
                  className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Mobile Number</label>

              <div className=" relative w-full">
                <input
                  type="text"
                  value={Profile.mobile}
                  name="mobile"
                  onChange={profilehandlechange}
                  placeholder="Enter your password"
                  className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
                />
              </div>
            </div>
            <div className="flex md:justify-end justify-center">
              <button
                onClick={() => setprofile(false)}
                type="button"
                class=" text-white bg-gray-600  font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Cancel
              </button>
              <button
                type="button"
                class="ml-2 text-white bg-yellow-600  font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>updateProfile()}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        
      </Modal>

      <div className="flex flex-col overflow-y-scroll">
        <div className="p-3 mt-8">
          <div className="flex justify-between items-center">
            <p>About Me</p>
            {editAbout ? (
              <button
                type="button"
                class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => aboutapi()}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => seteditAbout((prev) => !prev)}
              >
                Edit
              </button>
            )}
          </div>
          {editAbout ? (
            <textarea
              label="About"
              name="About"
              placeholder="Add something about you"
              style={{
                width: "98.8%",
                margin: "1rem 0.7rem",
              }}
              value={About}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full text-sm px-3 py-2 h-36  outline-none rounded-md border focus:shadow-sm resize-none"
            ></textarea>
          ) : (
            <textarea
              label="About"
              name="About"
              placeholder="Add something about you"
              style={{
                width: "98.8%",
                margin: "1rem 0.7rem",
              }}
              value={About}
              readOnly
              onChange={(e) => setAbout(e.target.value)}
              className="w-full text-sm px-3 py-2 h-36  outline-none rounded-md border focus:shadow-sm resize-none"
            ></textarea>
          )}
          <hr className="text-gray-500" />
        </div>
        <div className="w-full mb-3 flex flex-col justify-center items-center">
          <div className="flex w-full ml-10 items-center">
            <p className="text-md font-bold" style={{ color: "#2c3d4f" }}>
              {" "}
              CIPER MAP
            </p>
          </div>
          <div className="p-2">

          <ActivityCalendar
      
            sampleData={sampleData}
            colorCustomization={colorCustomization}
            showMonth={true}
            showDay={true}
            showWeekdayLabels={true}
          />
          </div>
        </div>

        <hr className="text-gray-500" />
        {/* //on web */}
        <div className="p-5">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold" style={{ color: "#2c3d4f" }}>
              ON THE WEB
            </p>
            {WebEdit ? (
              <button
                type="button"
                class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => Webapi()}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => setWebEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
            <div className=" grid  grid-rows-2 gap-3">
              <div className="flex flex-col">
                <label className="mb-1 ml-2">LinkedIn</label>
                <div class="flex py-1 px-1  outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <div class=" mr-1 flex justify-center items-center bg-gray-200 rounded-full p-2">
                    <LinkedInIcon style={{ fontSize: "15px" }} />
                  </div>
                  {WebEdit ? (
                    <>
                      <input
                        name="LinkedIn"
                        value={Web.LinkedIn}
                        onChange={Webhandlechange}
                        class="block w-full font-medium tracking-wide text-sm "
                        placeholder="LinkedIn"
                      />
                      <div class="w-8 flex justify-center items-center">
                        <ModeEditOutlineIcon style={{ fontSize: "15px" }} />
                      </div>
                    </>
                  ) : (
                    <input
                      readOnly
                      value={Web.LinkedIn}
                      class="block w-full font-medium tracking-wide text-sm "
                      placeholder="LinkedIn"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 ml-2">Github</label>
                <div class="flex py-1 px-1  outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <div class=" mr-1 flex justify-center items-center bg-gray-200 rounded-full p-2">
                    <GitHubIcon style={{ fontSize: "15px" }} />
                  </div>
                  {WebEdit ? (
                    <>
                      <input
                        name="GitHub"
                        value={Web.GitHub}
                        onChange={Webhandlechange}
                        class="block w-full font-medium tracking-wide text-sm "
                        placeholder="Github Link"
                      />
                      <div class="w-8 flex justify-center items-center">
                        <ModeEditOutlineIcon style={{ fontSize: "15px" }} />
                      </div>
                    </>
                  ) : (
                    <input
                      value={Web.GitHub}
                      readOnly
                      class="block w-full font-medium tracking-wide text-sm "
                      placeholder="Github Link"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className=" grid  grid-rows-2 gap-3">
              <div className="flex flex-col">
                <label className="mb-1 ml-2">Instagram</label>
                <div class="flex py-1 px-1  outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <div class=" mr-1 flex justify-center items-center bg-gray-200 rounded-full p-2">
                    <InstagramIcon style={{ fontSize: "15px" }} />
                  </div>
                  {WebEdit ? (
                    <>
                      <input
                        name="Instagram"
                        value={Web.Instagram}
                        onChange={Webhandlechange}
                        class="block w-full font-medium tracking-wide text-sm "
                        placeholder="Instagram"
                      />
                      <div class="w-8 flex justify-center items-center">
                        <ModeEditOutlineIcon style={{ fontSize: "15px" }} />
                      </div>
                    </>
                  ) : (
                    <input
                      value={Web.Instagram}
                      readOnly
                      class="block w-full font-medium tracking-wide text-sm "
                      placeholder="Instagram"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 ml-2">Facebook</label>
                <div class="flex py-1 px-1  outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <div class=" mr-1 flex justify-center items-center bg-gray-200 rounded-full p-2">
                    <FacebookIcon style={{ fontSize: "15px" }} />
                  </div>
                  {WebEdit ? (
                    <>
                      <input
                        name="Facebook"
                        value={Web.Facebook}
                        onChange={Webhandlechange}
                        class="block w-full font-medium tracking-wide text-sm "
                        placeholder="Facebook"
                      />
                      <div class="w-8 flex justify-center items-center">
                        <ModeEditOutlineIcon style={{ fontSize: "15px" }} />
                      </div>
                    </>
                  ) : (
                    <input
                      value={Web.Facebook}
                      readOnly
                      class="block w-full font-medium tracking-wide text-sm "
                      placeholder="Facebook"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className=" grid  grid-rows-2 gap-3">
              <div className="flex flex-col">
                <label className="mb-1 ml-2">Twitter</label>
                <div class="flex py-1 px-1  outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <div class=" mr-1 flex justify-center items-center bg-gray-200 rounded-full p-2">
                    <TwitterIcon style={{ fontSize: "15px" }} />
                  </div>
                  {WebEdit ? (
                    <>
                      <input
                        name="Twitter"
                        value={Web.Twitter}
                        onChange={Webhandlechange}
                        class="block w-full font-medium tracking-wide text-sm "
                        placeholder="Twitter"
                      />
                      <div class="w-8 flex justify-center items-center">
                        <ModeEditOutlineIcon style={{ fontSize: "15px" }} />
                      </div>
                    </>
                  ) : (
                    <input
                      value={Web.Twitter}
                      class="block w-full font-medium tracking-wide text-sm "
                      placeholder="Twitter"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 ml-2">Website</label>
                <div class="flex py-1 px-1  outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <div class=" mr-1 flex justify-center items-center bg-gray-200 rounded-full p-2">
                    <LanguageIcon style={{ fontSize: "15px" }} />
                  </div>
                  {WebEdit ? (
                    <>
                      <input
                        name="website"
                        value={Web.website}
                        onChange={Webhandlechange}
                        class="block w-full font-medium tracking-wide text-sm "
                        placeholder="Website"
                      />
                      <div class="w-8 flex justify-center items-center">
                        <ModeEditOutlineIcon style={{ fontSize: "15px" }} />
                      </div>
                    </>
                  ) : (
                    <input
                      name="website"
                      readOnly
                      value={Web.website}
                      class="block w-full font-medium tracking-wide text-sm "
                      placeholder="Website"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* professional info */}
        <div className="p-5">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold" style={{ color: "#2c3d4f" }}>
              PROFESSIONAL INFORMATION
            </p>
            {editProf ? (
              <button
                type="button"
                class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={()=>profapi()}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => seteditProf(true)}
              >
                Edit
              </button>
            )}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className=" grid gap-3">
              <div className="flex flex-col">
                <label className="mb-1 ml-2">Higher education</label>
                <div class="flex outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <select
                    required
                    type="text"
                    name="Education"
                    value={Prof.Education}
                    onChange={profhandlechange}
                    className="w-full text-xs px-1 py-1 h-10  outline-none rounded-md border focus:shadow-sm resize-none"
                    disabled={!editProf}
                  >
                    <option className="mt-2">Primary</option>
                    <option className="mt-2">Secondary</option>
                    <option className="mt-2">Higher Secondary</option>
                    <option className="mt-2">Graduation</option>
                    <option className="mt-2">Post Graduation</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" grid gap-3">
              <div className="flex flex-col">
                <label className="mb-1 ml-2">what do you do currently</label>
                <div class="flex   outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                  <select
                    required
                    disabled={!editProf}
                    value={Prof.Currently}
                    type="text"
                    name="Currently"
                    onChange={profhandlechange}

                    className="w-full text-xs px-1 py-1 h-10  outline-none rounded-md border focus:shadow-sm resize-none"
                  >
                    <option className="mt-2">College Student</option>
                    <option className="mt-2">Schooling</option>
                    <option className="mt-2">Teaching</option>
                    <option className="mt-2">Job</option>
                    <option className="mt-2">Freelancing</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* password */}
        <div className="p-5">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold" style={{ color: "#2c3d4f" }}>
              PASSWORD & SECURITY
            </p>
            <button
              type="button"
              class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={() => setopenPopup(true)}
            >
              Change
            </button>
          </div>
          
            <div className="flex flex-col ">
              <label className="mb-1 ml-2">Password</label>
              <div class="flex py-1 px-1 w-full outline-none rounded-lg border boractive:bg-gray-600 focus:bg-gray-700">
                <input
                  text="password"
                  class="block w-full font-medium tracking-wide text-sm text-white"
                  placeholder="Password"
                />
              </div>
            </div>
          
        </div>
        {/* password modal */}
        <Modal
          setopenPopup={setopenPopup}
          openPopup={openPopup}
          closeShow={false}
        >
          <div className="flex flex-col px-10 py-3">
            {
              PasswordsError.length>1?
              <label className="text-yellow-500 mb-2 text-lg">New and Confirm not match!</label>:null
            }

            <div className="flex flex-col">
              <label>Current Password</label>

              <div className=" relative w-full">
                <input
                  type={open === false ? "password" : "text"}
                  name="Cur"
                  value={Passwords.Cur}
                  onChange={Passwordhandlechange}
                  placeholder="Enter your password"
                  className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
                />
                <div className="text-2xl absolute top-2 right-2">
                  {open === false ? (
                    <RemoveRedEyeIcon onClick={toggle} />
                  ) : (
                    <VisibilityOffIcon onClick={toggle} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label>New Password</label>
              <div className=" relative w-full">
                <input
                  type={open === false ? "password" : "text"}
                  name="New"
                  value={Passwords.New}
                  onChange={Passwordhandlechange}

                  placeholder="Enter your password"
                  className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
                />
                <div className="text-2xl absolute top-2 right-2">
                  {open === false ? (
                    <RemoveRedEyeIcon onClick={toggle} />
                  ) : (
                    <VisibilityOffIcon onClick={toggle} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label>Confirm Password</label>
              <div className=" relative w-full">
                <input
                  type={open === false ? "password" : "text"}
                  name="Confirm"
                  value={Passwords.Confirm}
                  onChange={Passwordhandlechange}

                  placeholder="Enter your password"
                  className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
                />
                <div className="text-2xl absolute top-2 right-2">
                  {open === false ? (
                    <RemoveRedEyeIcon onClick={toggle} />
                  ) : (
                    <VisibilityOffIcon onClick={toggle} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setopenPopup(false)}
                type="button"
                class=" text-white bg-gray-600  font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Cancel
              </button>
              <button
                type="button"
                class="ml-2 text-white bg-yellow-600  font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={()=>UpdatePwdapi()}
              >
                Update
              </button>
            </div>
          </div>
        </Modal>

        {/* interset */}
        <div className="p-5">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold" style={{ color: "#2c3d4f" }}>
              INTEREST
            </p>
            <button
              type="button"
              class="text-white bg-yellow-600 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={() => setinterest(true)}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-wrap ">
            {
              AllDetail.interest.map((e1)=>{

                return Interest.map((e)=>{
                  return(
                    <>

                    {e1==e.id?
                    <p className="px-3 py-1 bg-yellow-200 rounded-full m-1">
                      {e.value}
                    </p>:null
                    
                  }
                    </>
                  )
                })
              })
            }

          </div>


        </div>

        {/* interest modal */}
        <Modal
          setopenPopup={setinterest}
          openPopup={interest}
          closeShow={false}
        >
          <div className="grid grid-cols-2 gap-2">
            {/* <div className="grid grid-rows-3"> */}
            {
              
              Interest.map((e)=>{
                return(
                  <>
                
 <p className="w-full text-xs  flex items-center justify-center px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
              style={{
                ...(e.take&&{
                  background:"#FB8B24",
                  color:"white",
                  fontWeight:500
                })
              }}
 key={e.id} onClick={()=>interesthandle(e.id)}>
{e.value}
</p>
              
                  </>
                )
              })
            }
            {/* </div> */}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setinterest(false)}
              type="button"
              class=" text-white bg-gray-600  font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Cancel
            </button>
            <button
              type="button"
              class="ml-2 text-white bg-yellow-600  font-medium rounded-lg text-sm px-7 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={()=>interestapi()}
            >
              Save
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Home;
