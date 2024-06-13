import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import UserLogin from './UserLogin'
import InputText from './InputText'
import ChatBoxSender from './ChatBoxSender'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages, setUsername } from '../Redux/chatSlice'

function ChatContainer() {

  let socketio = socketIOClient("http://localhost:3001")
  const dispatch = useDispatch()
  const {username,messages}= useSelector(state=>state.chatReducer)
  console.log(messages);
  useEffect(()=>{
    socketio.on('chat',senderChat=>{
      console.log(senderChat);
      dispatch(setMessages(senderChat))
    })
    return () => {
      socketio.off('chat');
    };
  },[]);


  const logOut = () => {
    dispatch(setUsername(""))
  }

  return (
    <div className='d-flex flex-row'>
      
      {
       username ? 
       <>
          <div style={{width:"100%"}}>
            <div className='d-flex flex-row justify-content-between ' style={{backgroundColor:"#6c9a78"}}>
              <h1 className='ms-2'><i className="fa-regular fa-comments fa-2xs fw-bold"></i><span className='fw-bold mb-4' style={{fontSize:"21px"}}> ChatUP</span></h1>
              <p onClick={()=>logOut()} style={{display:"flex",alignItems:"center",paddingRight:"20px",marginBottom:"0", fontSize:"17px"}}><i class="fa-solid fa-arrow-right-from-bracket"></i></p>
            </div>
            <div>
                <ChatBoxSender/>
                <InputText/>
            </div>
          </div>
       </>
       :
        <UserLogin/>  
      }
    </div>
  )
}

export default ChatContainer
