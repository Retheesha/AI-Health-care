import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { submit_Register, updateSpecialist } from "../../slices/registerSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import './index.css'
import { Doct_Reg_Log_Header } from "../../Component/Register_Header"




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
        formData.append("doctorid", doctorRegisterSubmit.doctor_id)
        formData.append("specialist", JSON.stringify(doctorRegisterSubmit.specialist))
        formData.append("phone", doctorRegisterSubmit.phone)
        formData.append("city", doctorRegisterSubmit.city)



            axios.post("https://retheesha.pythonanywhere.com/doctorregister", formData).then((res) => {
                if(res.data.status=="success"){
                    alert("Registration Success")
                    navigate("/doctor/login")
                  }
                  else if(res.data.message=="User already exists"){
                    alert("This email is already registered. Please use a different email address.")
                  }
                })


        // }, [])


    }

    return (
        <>
            <div className="register-page full-screen sidebar-collapse">
                {/* <!-- Navbar --> */}
                <Doct_Reg_Log_Header/>
                {/* <!-- End Navbar --> */}

                <div className="wrapper">
                    <div className="page-header" 
                    // style={{ backgroundImage: "url ('../../assets/img/sections/soroush-karimi.jpg')" }}
                    >
                        <div className="filter"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-7 col-12 ml-auto">
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-umbrella"></i>
                                        </div>
                                        <div className="description">
                                            <h3> A Pillar of Effective Care</h3>
                                            <p>A physician's decisions affect lives, so they must approach their work with honesty and respect for others. Trustworthiness is essential in the physician-patient relationship, and only someone with a strong moral foundation can foster that trust.</p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-map-signs"></i>
                                        </div>
                                        <div className="description">
                                            <h3> Kindness and Ethics</h3>
                                            <p>A good person with empathy, kindness, and a strong ethical compass is better suited to use knowledge for the greater good. In medicine, a great physician isn't just technically skilled but genuinely cares about their patients' well-being.</p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-user-secret"></i>
                                        </div>
                                        <div className="description">
                                            <h3> Healthcare's True Goal </h3>
                                            <p>"A doctor's mission should be not simply to prevent death but to improve the quality of life." – Patch Adams.</p>
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
                                            <input type="email" className="form-control" placeholder="Email" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, email: e.target.value }))} />
                                            <input type="password" className="form-control" placeholder="Create Password" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, password: e.target.value }))} />
                                            <input type="text" className="form-control" placeholder="Doctor UID" onKeyUp={(e) => dispatch(submit_Register({ ...doctorRegisterSubmit, doctor_id: e.target.value }))} />
                                            {/* <input type="text" className="form-control" placeholder="Specialist" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,specialist:e.target.value}))}/> */}

                                            <div className="input-group">
                                                <input type="text" 
                                                    // value={specialists} 
                                                    className="form-control mb-0" placeholder="Specialist" onKeyUp={(e) => (addSpecialist(e.target.value))} />
                                                <button className="btn btn-info m-0 rounded-end" 
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