import { createSlice } from "@reduxjs/toolkit";
const initialState={
    ai_details:{
        allopathic:"",
        siddha:"",
        food:""
    }
}        

export const AitipsSlice=createSlice({
    name:"ai_tips",
    initialState:initialState,  
    reducers:{
        setAllopathicdetails:(state,action)=>{
            state.ai_details.allopathic=action.payload
        },
        setSiddhadetails:(state,action)=>{
            state.ai_details.siddha=action.payload
        },
        setFooddetails:(state,action)=>{
            state.ai_details.food=action.payload
        }
       
        
    }
}
)
export const {setAllopathicdetails,setSiddhadetails,setFooddetails} =AitipsSlice.actions
export default AitipsSlice.reducer