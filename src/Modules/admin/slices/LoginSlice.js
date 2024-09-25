import { createSlice } from "@reduxjs/toolkit";



const loginState = {
    adminlogin:{
       request:"candidate_login",
       email: "",
       password: ""

   }
}

export const loginSlice = createSlice({
    name:"login",
    initialState:loginState,
    reducers:{
        login:(state,action)=>{
            state.adminlogin=action.payload

        }
    }
    
})



export const{login}=loginSlice.actions
export default loginSlice.reducer