import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import './index.css'

export const Doctor_profile = () => {

    const [doctorProfile, getDoctorData] = useState({})
    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin
    console.log(doctorLoginSubmit)


    useEffect(() => {
        axios.get(`http://agaram.academy/api/action.php?request=ai_health_getalldoctorsdetails&doctor_id=${doctorLoginSubmit.data.id}`).then((doctorDetail) => {
            getDoctorData(doctorDetail.data.data)

        })
    }, [])



    // console.log(doctorProfile.id)
    return (
        <>
            <Header />

            <div className="add-product sidebar-collapse">
                <div className="main body-bg">
                    <div className="section body-bg">
                        <div className="container w-50">
                            <div className="row container-bg p-4">
                                <div className="col-5 mx-auto p-5 doctor-bg-left">
                                    <img src="../assets/img/sections/doctor/doctor-profile.png" />
                                </div>
                                <div className="col-7 mx-auto doctor-bg-right">
                                    <div>
                                        <div>
                                            {/* <label className="w-50">Name</label> */}
                                            <h3 className="card-title">
                                                {doctorProfile.name} Srimathan S
                                            </h3>
                                        </div>
                                        <div>
                                            <i class="fa fa-envelope fa-1x" aria-hidden="true"></i>
                                            <label className="">Email</label>
                                            <h6 className="card-title">
                                                {/* {doctorProfile.age} */} 60@gmail.Com
                                            </h6>
                                        </div>
                                        <div>
                                            <i class="fa fa-id-card-o fa-1x" aria-hidden="true"></i>
                                            <label className="">UID</label>
                                            <h6 className="card-title">
                                                {/* {doctorProfile.gender} */} 9520
                                            </h6>
                                        </div>

                                        <div>
                                            <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
                                            <label className="">Phone No</label>
                                            <h6 className="card-title">
                                                {/* {doctorProfile.duration} */} + 91 982223725
                                            </h6>
                                        </div>
                                        <div>
                                            <i class="fa fa fa-map-marker fa-1x" aria-hidden="true"></i>
                                            <label className="">City</label>
                                            <h6 className="card-title">
                                                {/* {doctorProfile.duration} */} Nagercoil
                                            </h6>
                                        </div>
                                        <div>
                                            <i class="fa fa-scribd fa-1x" aria-hidden="true"></i>
                                            <label className="">Specialist</label>
                                            <h6 className="card-title">
                                                {/* {doctorProfile.duration} */} Specialist
                                            </h6>
                                            {/* <h6 className="card-title">
                                            <ul className="card-title">
                                                {doctorProfile.blood_group}
                                                <li>Fever</li>
                                                <li>Fever</li>
                                            </ul>
                                            </h6> */}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}