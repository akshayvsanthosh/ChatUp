import React from 'react'
import { useSelector } from 'react-redux'

function ChatBoxSender() {
    const {username,messages}= useSelector(state=>state.chatReducer)

    return (
        <div>
        {messages.map((chat,index)=>(
            chat.username === username?
            <div key={index} className='d-flex flex-row justify-content-end p-1'>
                <p className='d-flex flex-column' style={{ padding: "10px", backgroundColor: "#4a4a4a", borderRadius: "20px 0px 20px 20px", maxWidth: "60%",color:"#fff" }}>
                    <strong style={{ fontSize: 13, paddingTop:"2px" }}>
                        {chat.username}
                    </strong>
                    {chat.message}
                    <span style={{fontSize:"10px",color:"#ccc",marginTop:"5px",textAlign:"end",marginLeft:"65px"}}>{chat.timestamp}</span>
                </p>
            </div>
            :
            <div key={index} className='d-flex justify-content-start flex-row p-1' >
            <p className='d-flex flex-column' style={{ padding: "10px", backgroundColor: "#207969", borderRadius: "0px 20px 20px 20px", maxWidth: "60%",color:"#fff" }}>
                <strong style={{ fontSize: 13, paddingTop:"2px"  }}>
                    {chat.username}
                </strong>
                {chat.message}
                <span style={{fontSize:"10px",color:"#ccc",marginLeft:"65px",marginTop:"5px",textAlign:"end"}}>{chat.timestamp}</span>
            </p>
            </div>
        ))   
        }
        </div>
    )
}

export default ChatBoxSender
