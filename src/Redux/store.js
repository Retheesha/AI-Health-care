import { configureStore } from '@reduxjs/toolkit'
import registerSlice from '../Modules/Doctor/slices/registerSlice'
import doctorLoginSlice  from '../Modules/Doctor/slices/Login_Slice'
import slotSlice from '../Modules/Doctor/slices/slotSlice'
import patientBookingSlice from '../Modules/Doctor/slices/patientBookingSlice'
import patient_payment_historySlice from '../Modules/Doctor/slices/PaymentHistorySlice'
import bookedDateSlice from '../Modules/Doctor/slices/bookedDateSlice'
import removeSlotSlice from '../Modules/Doctor/slices/removeSlotSlice'
import LoginSlice from '../Modules/admin/slices/LoginSlice'
import  patientSlice from '../Modules/User/slices/PatientSlice'
import userRegisterSlice from '../Modules/User/slices/RegisterSlice'
import  Userloginslice from '../Modules/User/slices/Loginslice'
import patientHistorySlice  from '../Modules/User/slices/HistorySlice'

import DoctorDetailsSlice  from '../Modules/User/slices/bookingSlice'
import Doctorlistslice from '../Modules/User/slices/Doctorlistslice'

export const store = configureStore({
  reducer: {
    doctor_register : registerSlice,
    doctor_login_state : doctorLoginSlice,
    doctor_slot_state : slotSlice,
    patient_booking_state: patientBookingSlice,
    patient_payment_history_state : patient_payment_historySlice,
    patient_booked_all_date_state : bookedDateSlice,
    remove_slot_state :removeSlotSlice,
    login:LoginSlice,
    patientdetails:patientSlice,
    userRegister:userRegisterSlice,
    userlogin:Userloginslice,
    userhistory:patientHistorySlice,
    user_doctor_slot:DoctorDetailsSlice,
    DoctorList:Doctorlistslice

   

  }
})