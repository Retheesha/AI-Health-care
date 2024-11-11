
import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setloginUser } from "../../slices/Loginslice"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Userlogin = () => {
  const userLoginvalue = useSelector((state) => state.userlogin).logindetails
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const login = () => {


    let formdata = new FormData();
    formdata.append("request", userLoginvalue.request)
    formdata.append("email", userLoginvalue.email)
    formdata.append("password", userLoginvalue.password)
    if((userLoginvalue.email=="" || userLoginvalue.password=="")){
      alert("Please fill out the required fields")
    }
    else{
      // axios.post(`http://agaram.academy/api/action.php?request=${userLoginvalue.request}`, formdata).then((res) => {
        axios.post(`https://retheesha.pythonanywhere.com/userlogin`, formdata).then((res) => {
        console.log(res)
        if (res.data.status == "success") {
          dispatch(setloginUser(res.data.data))
          navigate("/user/home")
        }
        else {
          alert("Unable to log in. Please verify your credentials and try again.")
        }
      })
    }
    

  }
  useEffect(() => {

  }, [userLoginvalue])
  return (<>
    <div className="login-page full-screen sidebar-collapse">
      <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
        <div className="container">
        
          <div className="navbar-translate">
          <img src="../../assets/img/user/AIH_Logo_Red_CR.png" width={"45%"}/>
            {/* <a className="navbar-brand" href="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
              AI-Health-Care
            </a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          {/* <div className="collapse navbar-collapse" data-nav-image="../../assets/img/blurred-image-1.jpg" data-color="orange">
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="btn btn-block btn-info" to="/user/register">
                  Register
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      <div className="wrapper">
        <div className="page-header" style={{ backgroundImage: "url('../assets/img/user/medical-stethoscope-green.jpg')" }}>
          <div className="filter"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                <div className="card card-register " style={{backgroundColor:"#86d9ab"}}>
                  <h3 className="card-title">Welcome</h3>
                  <div className="register-form">
                    <label>Email</label>
                    <input type="email" className="form-control no-border" placeholder="Email" onKeyUp={(e) => dispatch(setloginUser({ ...userLoginvalue, email: e.target.value }))} />
                    <label>Password</label>
                    <input type="password" className="form-control no-border" placeholder="Password" onKeyUp={(e) => dispatch(setloginUser({ ...userLoginvalue, password: e.target.value }))} />
                    <button className="btn btn-danger btn-block btn-round" onClick={() => login()}>login</button>
                  </div>
                  <div className="forgot">
                    <a href="#paper-kit" className="btn btn-link btn-danger">Forgot password?</a>
                  </div>
                  <div className="register text-center my-2">
                    <strong>Don't have an account? <Link className="btn-link" to="/user/register">
                      Register.</Link></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}