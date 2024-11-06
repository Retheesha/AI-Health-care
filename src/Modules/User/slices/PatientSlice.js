import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  patientDetails:{
    request: "ai_health_create_patient",
    name: "",
    gender: "",
    blood_group:"",
    age: "",
    diseases:[],
    duration: "",
    existing_diseases: ""
  },
  
  bookingDetails:{
    booking_date:"",
    booking_time:""
  }
}

export const patientSlice = createSlice({
    name: 'patientdetails',
    initialState,
    reducers: {
      setPatient:(state,action)=>{
        state.patientDetails=action.payload
      },
      updateDiseases:(state,action)=>{
        state.patientDetails.diseases=action.payload
      },
      setage:(state,action)=>{
        state.patientDetails.age=action.payload
      },
      setBooking:(state,action)=>{
        state.bookingDetails=action.payload
      },
    },
  })
  
  export const {setPatient,setBooking,updateDiseases,setage} = patientSlice.actions

  export default patientSlice.reducer