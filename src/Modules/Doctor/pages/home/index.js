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
    const [disease_data, getDiease] = useState([])
    console.log(disease_data)

    

    // get doctor id in login page
    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin

    useEffect(() => {
        // axios.get(`http://agaram.academy/api/action.php?request=ai_health_get_all_booked_patients&doctor_id=${doctorLoginSubmit.data.id}`).then((get_all_patients) => {
            axios.get(`https://retheesha.pythonanywhere.com/getpatientbooking/${doctorLoginSubmit.data.id}`).then((get_all_patients) => {    
            set_dispatch(get_patient_data(get_all_patients.data.data))
            console.log(get_all_patients)
            // set_dispatch(setEnquiry(get_all_patients.data.data.enquiry_details))
            // getDiease((get_all_patients.data.data.enquiry_details.diseases))
        })
    },[])

    // console.log(get_patients_slots_state.enquiry_details)

    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <div className="media-footer">
                                <button href="#" className="btn btn-info pull-right" type="button">Show All</button>
                            </div>
                            <h4 className="title">

                            </h4>

                            <div className="row">
                                {get_patients_slots_state=== null ? 
                                        <div>No slots available</div>:
                                    get_patients_slots_state.map((e)=>
                                        <div className="col-6 mx-auto">
                                        <div className="card card-blog border border-3">
                                            {/* <div className="card-image">
                                                <a href="#pablo">
                                                    <img className="img img-raised" src="../assets/img/sections/roger-keller.jpg" />
                                                </a>
                                            </div> */}
                                            <div className="card-body lable-color">
                                                <div>
                                                    <label className="w-50">Booked Date</label>
                                                    <h5 className="card-title">
                                                            <b> {e.booking_date} </b>
                                                        </h5>
                                                </div>
                                                <div>
                                                    <label className="w-50">Booked Time</label>
                                                    <h5 className="card-title">
                                                            {e.booking_time}
                                                        </h5>
                                                </div>
                                                <div>
                                                    <label className="w-50">Patient Name</label>
                                                    <h5 className="card-title">
                                                            {e.enquiry_details.name}
                                                        </h5>
                                                </div>
                                                <div>
                                                    <label className="w-50">Patient age</label>
                                                    <h5 className="card-title">
                                                        {e.enquiry_details.age}
                                                    </h5>
                                                </div>
                                                <div>
                                                    <label className="w-50">Gender</label>
                                                    <h5 className="card-title">
                                                            {e.enquiry_details.gender}
                                                        </h5>
                                                </div>
                                                <div>
                                                    <label className="w-50">Blood Group</label>
                                                    <h5 className="card-title">
                                                            {e.enquiry_details.blood_group}
                                                        </h5>
                                                </div>
                                                <div>
                                                    <label className="w-50">Duration of Infection</label>
                                                    <h5 className="card-title">
                                                            {e.enquiry_details.duration}
                                                        </h5>
                                                </div>
                                                <div className="">
                                                    {/* <h5 className="my-3 text-danger">Current Diseases</h5>
                                                        <ul>
                                                            {
                                                                disease_data.map((e, i) =>
                                                                    <li className="card-title">{e}</li>
                                                                )
                                                            }
                                                        </ul> */}
                                                </div>
                                                <p className="card-description">
                                                    <h5 className="my-3 text-danger">Existing  Diseases</h5>
                                                    {e.enquiry_details.existing_diseases}
                                                </p>
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