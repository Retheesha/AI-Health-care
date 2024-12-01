import { createSlice } from "@reduxjs/toolkit";


const patientBookingSlice = createSlice(
    {
        name : 'patient_booking_state',
        initialState :{
            patientBooking:[{
                enquiry_details:{
                    diseases:[]
                }
            }]
        },
        reducers:{
            get_patient_data :(state,action)=>{
                state.patientBooking = action.payload
            },
            setEnquiry :(state,action)=>{
                state.patientBooking.enquiry_details = action.payload
            }
        }
    }
)

export const { get_patient_data,setEnquiry} = patientBookingSlice.actions
export default patientBookingSlice.reducer