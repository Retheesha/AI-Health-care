import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { get_login_data } from "../../slices/Login_Slice"
import { Doct_Reg_Log_Header } from "../../Component/Register_Header"
import "./index.css"


export const Doctor_Login = () => {

    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitDoctorLogin = () => {

// <<<<<<< doctor-module-2
        const formData = new FormData()
        formData.append("email", doctorLoginSubmit.email)
        formData.append("password", doctorLoginSubmit.password)
// =======

//             // axios.post("http://agaram.academy/api/action.php?request=ai_health_doctor_login",formData).then((log)=>{
//             axios.post("https://retheesha.pythonanywhere.com/doctorlogin",formData).then((log)=>{   

//                 let status = log.data.status
// >>>>>>> submaster

        axios.post("https://retheesha.pythonanywhere.com/doctorlogin", formData).then((log) => {
            if (log.data.status== "success" && (log.data.data?.status=="approved")) {
                // localStorage.setItem("isLogged", "true")
                navigate("/doctor/home")
                dispatch(get_login_data(log.data))
                localStorage.setItem("doctor_id",log.data.data.id)
            }
            else if(log.data.data?.status=="processing"){
                alert("Your registeration under verification please wait untill process")
            }
            else {
                alert("Please Check the UserId and password")
            }
        }
        )
    }

    return (
        <>
            <div className="login-page full-screen sidebar-collapse">
                {/* <!-- Navbar --> */}
                <Doct_Reg_Log_Header />
                {/* <!-- End Navbar --> */}
                <div className="wrapper">
                    <div className="page-header" style={{ backgroundImage: "url('../../assets/img/sections/bruno-abatti.jpg');" }}>
                        <div className="filter"></div>
                        <div className="container log_page">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto reg-form">
                                    <div className="card card-register">
                                        <h3 className="card-title text-secondary">Welcome</h3>
                                        {/* <img src="../../assets/img/sections/doctor/Blue/AIH_Logo_Blue_CR.png" /> */}

                                        <form className="register-form">
                                            <label>Email</label>
                                            <input type="email" className="form-control no-border"  placeholder="Enter Email ID" onKeyUp={(e) => dispatch(get_login_data({ ...doctorLoginSubmit, email: e.target.value }))} />
                                            <label>Password</label>
                                            <input type="password" className="form-control no-border" placeholder="Enter Your Password" onKeyUp={(e) => dispatch(get_login_data({ ...doctorLoginSubmit, password: e.target.value }))} />
                                            <button className="btn btn-danger btn-block btn-round" type="button" onClick={submitDoctorLogin}>Login</button>
                                        </form>
                                        <div className="forgot">
                                            <Link href="#paper-kit" className="btn btn-link btn-danger">Forgot password?</Link>
                                        </div>
                                        <h6 className="text-center">(or)</h6>
                                        <div>
                                            <p className="text-center"><Link to="/doctor/register" className="text-primary">Register</Link></p>
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