import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice(
    {
        name : "doctor_slot_state",
        initialState :{
            doctorSlotSlice:[],
            getSlotListSlice:{
                consulting_fee: "",
                clinic_details: []
            }
        },
        reducers:{
            set_slot_data :(state,action)=>{
                state.doctorSlotSlice = action.payload
            },
            get_slot_data :(state,action)=>{
                state.getSlotListSlice = action.payload
            },
            Updated_clinic_details :(state,action)=>{
                state.getSlotListSlice.clinic_details = action.payload
            },
        }
    },

)

export default slotSlice.reducer
export  const {set_slot_data, get_slot_data,Updated_clinic_details} = slotSlice.actions

