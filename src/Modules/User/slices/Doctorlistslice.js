
import { createSlice } from "@reduxjs/toolkit";
const initialState={
   doctorlist:[],
   specialist:[]
}        

export const DoctorlistSlice=createSlice({
    name:"DoctorList",
    initialState:initialState,  
    reducers:{
        setDoctorList:(state,action)=>{
            state.doctorlist=action.payload
        },
        setSpecialist:(state,action)=>{
            state.specialist=action.payload
        },
        
    },
   
}
)
export const {setDoctorList,setSpecialist} =DoctorlistSlice.actions

export default DoctorlistSlice.reducer