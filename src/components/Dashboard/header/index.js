import React ,{useState}from 'react'
import NotesIcon from '@mui/icons-material/Notes';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header=({children})=>{
    const [searcher,setsearcher]=useState(true)
  
    return(
        <>
        <div className='flex flex-col'>
          <div style={{height:"8vh"}} className='p-2 grid grid-cols-2 gap-3'>
{
    searcher?
<>
            <div className='flex items-center '>

    
                <div className='w-10 flex  md:block hidden justify-center items-center'>

                    <NotesIcon style={{fontSize:"25px"}}/>
                </div>
                
                    <div className='p-1 w-10  mr-1'>

                    <img height="100%" width="100%" src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png
" alt="" srcset="" />
                    </div>
                    <div>
                        <p className='text-lg font-bold	'>CipherSchools</p>
                    </div>

            </div>



            <div className='flex items-center justify-end'>
                {/* //search */}

                <div className=" md:flex hidden items-center h-10   border-2 border-slate-100 rounded-3xl p-1">

<div className="w-10 flex justify-center items-center">

<i className='fa fa-search '></i>
</div>
<div >

        <input type="text" placeholder="search box" className="px-3 py-2 outline-0 h-9 "/>
      
        </div>
        </div>

        {/* //avtar */}
        <div className='md:block hidden'>

        <Avatar alt="Remy Sharp"  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
        </div>
        <Switch {...label} defaultChecked />
        <div className='md:hidden block' onClick={()=>setsearcher(false)} >

<SearchIcon />
        </div>


            </div>
</>:

            <div className="flex  items-center h-10   border-2 border-slate-100 rounded-3xl p-1">

<div className="w-10 flex justify-center items-center">

<i className='fa fa-search '></i>
</div>
<div >

        <input type="text" placeholder="search" className="px-3 py-2 outline-0 h-9 "/>
      
        </div>
        </div>
}

 


         
          </div>
          
          {children}
        </div>
        </>
    )
}
export default Header

