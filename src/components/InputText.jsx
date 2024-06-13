import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import socketIOClient from 'socket.io-client'


function InputText() {
  let socketio = socketIOClient("https://chatup-server-e9sc.onrender.com")

  const [message, setMessage] = useState("")
  const {username,messages}= useSelector(state=>state.chatReducer)

  const handleSend = () => {
    if (message) {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const timestamp = `${formattedHours}:${formattedMinutes} ${ampm}`;
      addMessage({
        message,
        timestamp,
        username
      })
      setMessage('')
    }
  }

  const sendChatToSocket=([chat])=>{
    socketio.emit("chat",[chat])
  }

  const addMessage = (chat) =>{
    sendChatToSocket([chat])
  }

  return (
    <div className='d-flex position-fixed bottom-0 w-100'>
      <textarea name="" id="" className='input' style={{ width: "90%", height: "50px", padding: 10, fontSize: 18 }} placeholder='write something....' value={message} onChange={e => setMessage(e.target.value)}>
      </textarea>
      <button onClick={() => handleSend()} className='btn btn-success inputBttn' style={{ width: "10%", height: 50, fontWeight: '400', fontSize: 18, borderRadius: 0 }}>Send</button>
    </div>
  )
}

export default InputText
