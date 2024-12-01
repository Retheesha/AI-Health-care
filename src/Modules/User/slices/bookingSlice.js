

import { createSlice } from "@reduxjs/toolkit";
const initialState={
    dotor_slot_details:[],
    booking_slots:{
    }
}        

export const DoctorDetailsSlice=createSlice({
    name:"user_doctor_slot",
    initialState:initialState,  
    reducers:{
        setDoctorSlotDetails:(state,action)=>{
            state.dotor_slot_details=action.payload
        },
        setBooking_slots:(state,action)=>{
            state.booking_slots=action.payload
        },
    }
}
)
export const {setDoctorSlotDetails,setBooking_slots,setEnquiry} =DoctorDetailsSlice.actions

export default DoctorDetailsSlice.reducer