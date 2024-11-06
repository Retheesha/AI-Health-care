import { createSlice } from "@reduxjs/toolkit";

export const doctorRegisterSlice = createSlice(
    {
        name: 'doctor_register',
        initialState: {
            doctor_register_data: {
                request: "ai_health_doctor_register",
                status: "processing",
                name: "",
                email: "",
                password: "",
                doctor_id: "",
                specialist: [],
                phone: "",
                city: ""
              }
            // doctor_register_data: {
            //     request: "ai_health_doctor_register",
            //     name: "",
            //     email: "",
            //     password: "",
            //     aadhar: null,
            //     address: "",
            //     phone: "",
            //     city: "",
            //     area: "",
            //     pin: null
            // }
        },
        reducers: {
            submit_Register: (state, action) => {
                state.doctor_register_data = action.payload
            },
            updateSpecialist: (state, action)=>{
                state.doctor_register_data.specialist= action.payload
            }
        }
    }
)

export const { submit_Register,updateSpecialist } = doctorRegisterSlice.actions
export default doctorRegisterSlice.reducer
