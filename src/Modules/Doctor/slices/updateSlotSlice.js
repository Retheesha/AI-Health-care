import { createSlice } from "@reduxjs/toolkit";

const update_slot_slice = createSlice({
    name :"update_slot_state",
    initialState :{
        updateSlot:[]
    },
    reducers :{
        alreadySetData:(state,action)=>{
            state.updateSlot = action.payload
        }
    }
})