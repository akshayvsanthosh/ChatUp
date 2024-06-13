import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        username:"",
        messages:[]
    },
    reducers:{
        setUsername:(state,action)=>{
            state.username=action.payload
        },
        setMessages:(state,action)=>{
            state.messages.push(...action.payload)
        }
    }
})

export const {setUsername, setMessages} = chatSlice.actions
export default chatSlice.reducer