import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import './index.css'
import { deleteSlot } from "../../slices/removeSlotSlice"


export const Slot_List = () => {



    // const get_slot_state = useSelector((state) => state.doctor_slot_state).doctorSlotSlice

    const navigate = useNavigate()

    const [doctor_booked_all_slots, get_doctor_booked_slots] = useState({})

    const [clinic_details, setClinicDetails] = useState([])
    let consultingFee = doctor_booked_all_slots.consulting_fee

    // clinic_details and consultingFee starts 



    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin

    useEffect(() => {
        axios.get(`https://retheesha.pythonanywhere.com/getuniquedoctorslot/${doctorLoginSubmit.data.id}`).then((doctor_booked_slot_all) => {
            get_doctor_booked_slots(doctor_booked_slot_all.data.data)
            setClinicDetails(JSON.parse(doctor_booked_slot_all.data.data.clinic_details))
        })
    }, []
    )
    console.log(doctor_booked_all_slots)



    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse ">
                <div className="main body-bg">
                    <div className="section body-bg">
                        <div className="container">
                            {/* <div className="media-footer">
                                <button href="#" className="btn btn-info pull-right" type="button">Show All</button>
                            </div> */}
                            {/* <h4 className="title">
                                <small><input type="date" id="date"></input>
                                </small>

                            </h4> */}

                            <div className="row">
                                {

                                    clinic_details.map((e, i) => {
                                        return (

                                            <div className="col-md-3 mx-auto">
                                                {e == "" ? <h2 className="text-center">No Slots Booked</h2> :

                                                    <div className="card card-pricing " data-color="orange">
                                                        <div className="card-body slot_bg">

                                                            <div className="card-icon">
                                                                {/* <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span> */}
                                                                <img src="../assets/img/sections/doctor/doctor-schedule_2_RW.png"/>
                                                            </div>
                                                            <hr/>
                                                            <p className="slot-text">
                                                            <i className="fa fa-calendar fa-1x" aria-hidden="true"></i>
                                                            {e.clinic_day}
                                                            </p>
                                                            <p className="slot-text">
                                                            <i className="fa fa-clock-o fa-1x" aria-hidden="true"></i>
                                                                {e.clinic_timing}
                                                            </p>
                                                            <p className="slot-text">
                                                            <i className="fa fa-inr fa-1x" aria-hidden="true"></i>
                                                            {consultingFee}
                                                            </p>
                                                            {/* <button type="button" className="btn btn-danger btn-just-icon" onClick={deleteSlot()}><i className="nc-icon nc-simple-remove" aria-hidden="true"></i></button> */}
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }

                                {/* <div className="col-md-3">
                                    <div className="card card-pricing" data-color="orange">
                                        <div className="card-body">
                                            <div className="card-icon">
                                                <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span>
                                            </div>
                                            <h3 className="card-title">12/08/2024</h3>
                                            <p className="card-description">
                                                3pm-4pmm
                                            </p>
                                            <div className="card-footer">
                                                <Link to="#" className="btn btn-neutral btn-round">No booking</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div style={{ width: "113px" }} className="mx-auto mt-4">
                                <Link to="/doctor/update-slot"><button type="button" className="btn btn-success" >Edit Slots</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}