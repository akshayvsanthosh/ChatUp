import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setUsername } from '../Redux/chatSlice';

function UserLogin() {
  const dispatch = useDispatch()
  const [user,setUser]=useState("")

  const handleSetUser = () =>{
    if (user) {
      dispatch(setUsername(user))
    } else {
      alert("Please fill the name")
    }
  }

  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div className='d-flex flex-column align-items-center' style={{height:"40%", width:"40%", backgroundColor:"bisque",borderRadius:"20px",padding:"9px"}}>
        <h3 className='text-center fw-semibold fs-2 text-primary'>ChatUP</h3>
        <TextField onChange={e=>setUser(e.target.value)} id="outlined-basic" label="username" variant="outlined" sx={{width:"80%", height:"40px", fontSize:18, borderRadius:"20px"}}/>
        <button onClick={()=>handleSetUser()} className='btn btn-primary mt-5 loginBttn' style={{width:"20%",height:40,fontWeight:'400',fontSize:18,borderRadius:10}}>Login</button>
      </div>
    </div>
  )
}

export default UserLogin
