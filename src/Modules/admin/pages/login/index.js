
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { login } from '../../slices/LoginSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export const Adminlogin = () => {


    // const [isSubmitted, setIsSubmitted] = useState(false);

    let loginvalue = useSelector((state) => state.login).adminlogin

    const dispatch = useDispatch()

    const navigate = useNavigate();


    const Loginfunction = () => {
        
        let formData = new FormData();

        formData.append("email",loginvalue.email)
        formData.append("password",loginvalue.password)


        if ((loginvalue.email=="")||(loginvalue.password=="")){
            alert("Please Fill the Required Details")
        }
        else {
            axios.post("https://retheesha.pythonanywhere.com/adminlogin",formData).then((log)=>{
                // let status = log.data.status


                if (log.data.status=="success"){
                    alert("Login successfully")
                    dispatch(login(log.data.data))
                    navigate("/admin/homepage")
                    localStorage.setItem("admin_token",log.data.data.admin_token)
                }
                else {
                    alert("login failed")
                }


            })
        }
    }


    return (
        <>


            <div className="login-page full-screen sidebar-collapse">

                {/* <!-- Navbar --> */}

                <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
                    <div className="container">
                        <div className="navbar-translate">
                            <img className="logo" style={{ width: "70%" }} src="../../assets/img/sections/admin/AIH_Logo_CP.png" />

                            {/* <a className="navbar-brand" title="AI-Health-Care" data-placement="bottom" target="_blank">
                                <i className="fa fa-heartbeat"></i> AI-Health-Care
                            </a> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>

                    </div>
                </nav>

                {/* <!-- End Navbar --> */}

                <div className="wrapper">
                    <div className="page-header" style={{ backgroundImage: "url('../../assets/img/sections/pexels-mediocrememories-2225618.jpg')" }}>
                        <div className="filter"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                                    <div className="card card-register" style={{ backgroundColor: "white" }}>
                                        <h3 style={{ color: "black" }} className="card-title">Welcome Admin</h3>
                                        <form className="register-form">
                                            <br />
                                            <br />
                                            <input type="email" className="form-control" placeholder="Email"

                                                onKeyUp=
                                                {(e) => dispatch(login({
                                                    ...loginvalue,
                                                    email: e.target.value
                                                }))}


                                            />
                                            <br />
                                            <input type="password" className="form-control no-border" placeholder="Password"

                                                onKeyUp=
                                                {(e) => dispatch(login({
                                                    ...loginvalue,
                                                    password: e.target.value
                                                }))}

                                            />
                                            <button className="btn btn-info btn-block btn-round" type="button" onClick={Loginfunction}>Login</button>
                                        </form>
                                        <div className="forgot">
                                            <a href="" className="btn btn-link">Forgot password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="demo-footer text-center">
                                <h6>&copy; <script>
                                    document.write(new Date().getFullYear())
                                </script>, made with <i className="fa fa-heart heart"></i> AI_Health_Care</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}