import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { get_login_data } from "../../slices/Login_Slice"


export const Doctor_Login = () => {

    const doctorLoginSubmit = useSelector((state)=>state.doctor_login_state).doctorLogin

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const submitDoctorLogin = ()=>{

        const formData = new FormData()     
        formData.append("email",doctorLoginSubmit.email)
        formData.append("password",doctorLoginSubmit.password)


            // axios.post("http://agaram.academy/api/action.php?request=ai_health_doctor_login",formData).then((log)=>{
            axios.post("https://retheesha.pythonanywhere.com/doctorlogin",formData).then((log)=>{   

                let status = log.data.status

                if (status == "success"){
                    localStorage.setItem("isLogged", "true")
                    navigate("/doctor/home")
                    dispatch(get_login_data(log.data))
                }else{
                    alert("Please Check the UserId and password")
                }
            }
        )
    }

    return (
        <>
            <div className="login-page full-screen sidebar-collapse">
                <div className="wrapper">
                    <div className="page-header" style={{backgroundImage: "url('../../assets/img/sections/bruno-abatti.jpg');"}}>
                        <div className="filter"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                                    <div className="card card-register">
                                        <h3 className="card-title">Welcome</h3>
                                        <form className="register-form">
                                            <label>Email</label>
                                            <input type="email" className="form-control no-border" placeholder="Email" onKeyUp={(e)=>dispatch(get_login_data({...doctorLoginSubmit,email:e.target.value}))}/>
                                            <label>Password</label>
                                            <input type="password" className="form-control no-border" placeholder="Password" onKeyUp={(e)=>dispatch(get_login_data({...doctorLoginSubmit,password:e.target.value}))} />
                                            <button className="btn btn-danger btn-block btn-round" type="button" onClick={submitDoctorLogin}>Login</button>
                                        </form>
                                        <div className="forgot">
                                            <Link href="#paper-kit" className="btn btn-link btn-danger">Forgot password?</Link>
                                        </div>
                                        <h6 className="text-center">(or)</h6>
                                        <div>
                                            <p className="text-center"><Link to="/doctor/register">Register</Link></p>
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