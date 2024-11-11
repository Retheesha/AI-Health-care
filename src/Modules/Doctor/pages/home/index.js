import { useNavigate } from "react-router-dom"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useState, useEffect } from "react"
import moment from "moment"
import { get_patient_data,setEnquiry } from "../../slices/patientBookingSlice"
import './index.css'


export const Doctor_Home = () => {

    const set_dispatch = useDispatch()
    const navigate = useNavigate()

    // get globe state
    const get_patients_slots_state = useSelector((state) => state.patient_booking_state).patientBooking
    // const enquiry_state=useSelector((state) => state.patient_booking_state).patientBooking.enquiry_details
    console.log(get_patients_slots_state)
    // get diseases from api parse diseases
    const [diseases, setDiseases] = useState([]);
    console.log(diseases)

    

    // get doctor id in login page
    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin    
    const doctor_id=localStorage.getItem("doctor_id")
    const doctorId = doctorLoginSubmit?.data?.id || doctor_id;

    useEffect(() => {
            axios.get(`https://retheesha.pythonanywhere.com/getpatientbooking/${doctorId}`).then((response) => {    
            const patientData = response.data.data;
            set_dispatch(get_patient_data(patientData))
            
            // const diseasesData = JSON.parse(dieseasearr);
           
            
        })  
    }, [])
     const today = moment().startOf('day'); // Start of today's date (00:00:00)

      const todaySlots = get_patients_slots_state?.filter(slot => {
      const slotDate = moment(slot.booking_date); 
      return slotDate.isSame(today, 'day');
    });
    console.log(todaySlots)



    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main body-bg">
                    <div className="section body-bg">
                        <div className="container">
                            
                        <div className="row">
                                {todaySlots==""? <h2 className="text-center align-middle" style={{ marginBottom:"215px"}}>No Patient Booked</h2>:
                                todaySlots.map((e) =>
                                    
                                    <div className="col-6 mx-auto ">
                                        
                                            <div className="card card-blog border border-3 patient-card px-4">
                                                <div className="card-image">
                                                    <a href="#pablo">
                                                        <img className="img img-raised" src="../assets/img/sections/doctor/W_P.jpg" />
                                                    </a>
                                                </div>

                                                
                                                    

                                                        <div className="card-body mb-3">
                                                            <div>
                                                                {/* <label className="w-50">Patient Name</label> */}
                                                                <h3 className="card-title mb-3">
                                                                    {e.enquiry_details.name}
                                                                </h3>
                                                            </div>
                                                            <hr className="patient-head" />
                                                            <div>
                                                                <i className="fa fa-child fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 patient-label">Patient age</label>
                                                                <h5 className="card-title">
                                                                    {e.enquiry_details.age}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                <i className="fa fa-intersex fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 patient-label">Gender</label>
                                                                <h5 className="card-title">
                                                                    {e.enquiry_details.gender}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                <i className="fa fa-tint fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 align-middle patient-label">Blood Group</label>
                                                                <h5 className="card-title">
                                                                    {e.enquiry_details.blood_group}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                <i className="fa fa-history fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 align-middle patient-label">Duration of Infection</label>
                                                                <h5 className="card-title ">
                                                                    {e.enquiry_details.duration}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                {/* <div className="media-footer">
                                                                    <button href="#" className="btn btn-info pull-right" type="button">Show All</button>
                                                                </div> */}
                                                                <div>
                                                                    {/* <label className="w-50">Booked Date</label> */}
                                                                    <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                                    <label className="w-50 align-middle patient-label">Booked Date</label>
                                                                    <h5 className="card-title">
                                                                        {e.booking_date}
                                                                    </h5>
                                                                </div>
                                                                <div className="patient-card-spacing">
                                                                    <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
                                                                    <label className="w-50 align-middle patient-label">Booked Time</label>
                                                                    <h5 className="card-title">
                                                                        {e.booking_time}
                                                                    </h5>
                                                                </div>
                                                                {/* <hr /> */}
                                                                {/* <div className="card-footer">
                                                                    <div className="author">
                                                                        <a href="#pablo">
                                                                            <img src="../assets/img/faces/kaci-baum-2.jpg" alt="..." className="avatar img-raised" />
                                                                            <span>Nickie Kelly</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="stats">
                                                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 5 min read
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            <hr/>
                                                            <div className="patient-card-spacing card-description">
                                                                {/* <h5 className="my-3 text-danger">Current Diseases</h5> */}
                                                                <label className="w-50 patient-label-head my-3">Current Diseases</label>
                                                                {/* {disease_data.map((e)=> */}
                                                                {e.enquiry_details.diseases==""?"":
                                                                   
                                                                    <ul>
                                                                    {JSON.parse(e.enquiry_details.diseases)}
                                                                </ul>}
                                                                {/* )} */}
                                                               
                                                            </div>
                                                            <p className="card-description">
                                                                <label className="w-50 patient-label-head my-3">Existing  Diseases</label>
                                                                <h5 className="card-title">
                                                                {e.enquiry_details.existing_diseases}
                                                                </h5>
                                                            </p>
                                                        </div>
                                                

                                            </div>
                                        
                                    </div>


                                

                                   )
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}