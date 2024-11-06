import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { Userlogin } from "./Modules/User/Pages/login";
import { Doctor_Login } from "./Modules/Doctor/pages/login";
import { Doctor_Register } from "./Modules/Doctor/pages/register";
import { Doctor_Home } from "./Modules/Doctor/pages/home";
import { DoctorSlot } from "./Modules/Doctor/pages/slot-booking";
import { PatientsList } from "./Modules/Doctor/pages/patient-booking-list";
import { Patient_History } from "./Modules/Doctor/pages/patient-payment-history";
import { Slot_List } from "./Modules/Doctor/pages/slot_list";
import { Adminlogin } from "./Modules/admin/pages/login";
import { Adminhomepage } from "./Modules/admin/pages/home";
import { Adminusers } from "./Modules/admin/pages/userslist";
import { Admindoctordetails } from "./Modules/admin/pages/doctordetails";
import { About } from "./Modules/admin/pages/about";
import { UserRegister } from "./Modules/User/Pages/register";
import { Userhome } from "./Modules/User/Pages/Home";
import { Userview } from "./Modules/User/Pages/View";
import { Profile } from "./Modules/User/Pages/Home/Profile";
import { Doctorapp } from "./Modules/User/Pages/Doctorappointment";
import { Userhistory } from "./Modules/User/Pages/UserHistory";
import { Viewdetails } from "./Modules/User/Pages/View/Viewdetails";
import { UserBooking } from "./Modules/User/Pages/Booking";

import { Update_Doctor_Slot } from "./Modules/Doctor/pages/slot_update";
import { Doctor_profile } from "./Modules/Doctor/pages/doctor-profile";


import { Homepage } from "./Modules/admin/pages/aihealth-homepage";

const router = createBrowserRouter([
  {path:"/",
    element:<Homepage/>
  },
  {
    path: "/user/login",
    element: <div><Userlogin/></div>,
  },
  {
    path : "/doctor/login",
    element : <Doctor_Login/>
  },
  {
    path : "/doctor/register",
    element : <Doctor_Register/>
  },
  {
    path : "/doctor/home",
    element : <Doctor_Home/>
  },
  {
    path :"/patient_list/:id",
    element : <PatientsList />
  },
  {
    path : "/doctor/slot",
    element : <DoctorSlot/>
  },
  {
    path:"/doctor/patients_history",
    element : <Patient_History/>
  },
  {
    path :"/doctor/slot_list",
    element: <Slot_List/>
  },
  {
    path :"/doctor/update-slot",
    element : <Update_Doctor_Slot/>
  },
  {
    path :"/doctor/profile",
    element:<Doctor_profile />
  },
  {
    path:"/admin/login",
    element:<Adminlogin/>
  },
  {
    path:"/admin/homepage",
    element:<Adminhomepage/>
  },
  {
    path:"/admin/userlist",
    element:<Adminusers/>
  },
  {
    path:"/admin/doctordetails/:id",
    element:<Admindoctordetails/>
  },
  {path:"/admin/about",
    element:<About/>
  },
  {
    path: "/user/register",
    element: <div><UserRegister/></div>,
  },
  {
    path: "/user/home",
    element: <div><Userhome/></div>,
  },
  {
    path: "/user/editprofile",
    element: <div><Profile/></div>,
  },
  {
    path: "/user/view",
    element: <div><Userview/></div>,
  },
  {
    path: "/user/doctorapp",
    element: <div><Doctorapp/></div>,
  },
  {
    path: "/user/history",
    element: <div><Userhistory/></div>,
  },
  {
    path: "/user/viewdetails/:id",
    element: <div><Viewdetails/></div>,
  },
  {
    path: "/user/booking",
    element: <div><UserBooking/></div>,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;