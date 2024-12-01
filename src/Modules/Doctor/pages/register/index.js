import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { submit_Register, updateSpecialist } from "../../slices/registerSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import './index.css'



export const Doctor_Register = () => {

    const doctorRegisterSubmit = useSelector((state) => state.doctor_register).doctor_register_data

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [specialists, addSpecialist] = useState("")
    const setSpecialList = () => {
        dispatch(updateSpecialist([...doctorRegisterSubmit.specialist,specialists]))
    }

    

    const submit_doct_register = () => {

        let formData = new FormData()


        formData.append("status", doctorRegisterSubmit.status)
        formData.append("name", doctorRegisterSubmit.name)
        formData.append("email", doctorRegisterSubmit.email)
        formData.append("password", doctorRegisterSubmit.password)
        formData.append("doctor_id", doctorRegisterSubmit.doctor_id)
        formData.append("specialist", JSON.stringify(doctorRegisterSubmit.specialist))
        formData.append("phone", doctorRegisterSubmit.phone)
        formData.append("city", doctorRegisterSubmit.city)


        // useEffect(() => {
            axios.post("https://retheesha.pythonanywhere.com/doctorregister", formData).then((res) => {
                let status = res.data.status
                status == "success" ? navigate("/doctor/login") : alert("please check the register form")

            })

        // }, [])


    }

    return (
        <>
            <div className="register-page full-screen sidebar-collapse">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
                    <div className="container text-center">
                        <div className="navbar-translate">
                            <Link className="navbar-brand" to="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="AI Health Care" data-placement="bottom" target="_blank">
                                AI-Health-Care
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        {/* <div className="collapse navbar-collapse" data-nav-image="../../assets/img/blurred-image-1.jpg" data-color="orange">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="btn btn-round btn-danger" to="https://www.creative-tim.com/product/paper-kit-2-pro" target="_blank">
                                        Doctor Register
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
                {/* <!-- End Navbar --> */}

                <div className="wrapper">
                    <div className="page-header" style={{ backgroundImage: "url ('../../assets/img/sections/soroush-karimi.jpg')" }}>
                        <div className="filter"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-7 col-12 ml-auto">
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-umbrella"></i>
                                        </div>
                                        <div className="description">
                                            <h3> We've got you covered </h3>
                                            <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. Everything you need in a single case.</p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-map-signs"></i>
                                        </div>
                                        <div className="description">
                                            <h3> Clear Directions </h3>
                                            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-user-secret"></i>
                                        </div>
                                        <div className="description">
                                            <h3> We value your privacy </h3>
                                            <p>Completely synergize resource taxing relationships via premier niche markets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-5 col-12 mr-auto">
                                    <div className="card card-register">
                                        <h3 className="card-title text-center">Registration Form</h3>
                                        {/* <div className="social">
                                            <button to="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                                            <button to="#paper-kit" className="btn btn-just-icon btn-google"><i className="fa fa-google"></i></button>
                                            <button to="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                                        </div> */}
                                        {/* <div className="division">
                                            <div className="line l"></div>
                                            <span>or</span>
                                            <div className="line r"></div>
                                        </div> */}
                                        <form className="register-form mt-3">
                                            {/* <input type="text" className="form-control" placeholder="Dr. Name" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,name:e.target.value}))}/>                                            
                                            <input type="email" className="form-control" placeholder="Email" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,email:e.target.value}))} />
                                            <input type="password" className="form-control" placeholder="Create Password" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,password:e.target.value}))} />
                                            <input type="text" className="form-control" p   laceholder="Aadhaar No" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,aadhar:e.target.value}))}/>
                                            <input type="text" className="form-control" placeholder="Address" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,address:e.target.value}))}/>
                                            <input type="text" className="form-control" placeholder="Contact No" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,phone:e.target.value}))}/>
                                            <input type="text" className="form-control" placeholder="City" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,city:e.target.value}))} />
                                            <input type="text" className="form-control" placeholder="Area" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,area:e.target.value}))}/>
                                            <input type="number" className="form-control" placeholder="Pincode" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,pin:e.target.value}))}/>
                                            <button className="btn btn-block btn-round" type="submit" onClick={submit_doct_register}>Register</button> */}

                                            {/* <input type="text" className="form-control" placeholder="Hospital Name" />
                                            <input type="text" className="form-control" placeholder="Specialist" />
                                            <input type="text" className="form-control" data-color="success" value="Oncologist, Neurologist, Anesthesiologist" data-role="tagsinput" placeholder="Specialist" /> */}


                                            <input type="text" className="form-control" placeholder="Dr. Name" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, name: e.target.value }))} />
                                            <input type="text" className="form-control" placeholder="Email" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, email: e.target.value }))} />
                                            <input type="password" className="form-control" placeholder="Create Password" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, password: e.target.value }))} />
                                            <input type="text" className="form-control" placeholder="Doctor UID" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, doctor_id: e.target.value }))} />
                                            {/* <input type="text" className="form-control" placeholder="Specialist" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,specialist:e.target.value}))}/> */}

                                            <div className="input-group">
                                                <input type="text" 
                                                    // value={specialists} 
                                                    className="form-control mb-0" placeholder="Specialist" onKeyUp={(e) => (addSpecialist(e.target.value))} />
                                                <button className="btn btn-info m-0" 
                                                type="button" 
                                                // disabled={specialists.length>0 ? false :true}
                                                 onClick={setSpecialList} >Add</button>
                                            </div>
                                            <ul className="mt-3">
                                                {doctorRegisterSubmit.specialist.map((s) =>
                                                    <li className="text-dark">{s}</li>
                                                )}
                                            </ul>

                                            <input type="text" className="form-control" placeholder="Contact No" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, phone: e.target.value }))} />
                                            <input type="text" className="form-control" placeholder="City" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, city: e.target.value }))} />
                                            {/* <input type="text" className="form-control" data-color="success" value="Oncologist, Neurologist, Anesthesiologist" data-role="tagsinput" placeholder="Specialist" /> */}
                                            <button className="btn btn-info btn-block btn-round" type="button" onClick={submit_doct_register}>Register</button>
                                        </form>
                                        <div className="login">
                                            <p>Already have an account? <Link to="/doctor/login">Log in</Link></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}