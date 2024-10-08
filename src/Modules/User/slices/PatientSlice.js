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
    day:"",
    slot:""
  }
}

export const patientSlice = createSlice({
    name: 'patientdetails',
    initialState,
    reducers: {
      setPatient:(state,action)=>{
        state.patientDetails=action.payload
      },
      setBooking:(state,action)=>{
        state.bookingDetails=action.payload
      },
    },
  })
  
  export const {setPatient,setBooking} = patientSlice.actions

  export default patientSlice.reducer