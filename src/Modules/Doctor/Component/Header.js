import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import './index.css'


export const Header = () => {

    const navigate = useNavigate()

    const logOut = () =>{
        localStorage.removeItem("doctor_token")
        navigate("/doctor/login")
    };

    return (
        <>
            <header className="doctor-head">
                <nav className="navbar navbar-expand-lg fixed-top nav-down" style={{ position: "sticky" }} >
                    <div className="container">
                        <div className="navbar-translate head-logo">
                            <Link className="navbar-brand py-0" to="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
                            <img src="../../assets/img/sections/doctor/AIH_Logo_CP.png" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" data-nav-image="../../assets/img/blurred-image-1.jpg" data-color="orange">
                            <ul className="navbar-nav ml-auto">
                                <li className="dropdown nav-item">
                                    <Link to="/doctor/home" className="nav-link nav-hov" data-toggle="dropdown" aria-expanded="false">Home</Link>
                                </li>
                                {/* <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">About</Link>
                                </li> */}
                                {/* <li className="dropdown nav-item">
                                    <Link to="/doctor/slot" className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">Slot Entry</Link>
                                </li> */}
                                {/* <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">Contact</Link>
                                </li> */}
                                <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link nav-hov" id="navbarDropdownMenuLink1" data-toggle="dropdown">Slot</Link>
                                    <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink1">
                                        <Link className="dropdown-item" to="/doctor/slot"><i className="nc-icon nc-bank"></i>Slot Entry</Link>
                                        <Link className="dropdown-item" to="/doctor/slot_list"><i className="nc-icon nc-basket"></i>Slot List</Link>
                                        {/* <Link className="dropdown-item" to="/doctor/patients_list"><i className="nc-icon nc-basket"></i>patients List</Link> */}

                                    </div>
                                </li>
                                <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link nav-hov" id="navbarDropdownMenuLink1" data-toggle="dropdown">Dashboard</Link>
                                    <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink1">
                                        <Link className="dropdown-item" to="/doctor/patients_history"><i className="nc-icon nc-bank"></i>History</Link>
                                        <Link className="dropdown-item" to="/doctor/profile"><i className="nc-icon nc-basket"></i>Profile</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                     <button onClick={logOut} className="btn btn-round btn-danger" target="_blank" >
                                        <i className="fa fa-sign-out" style={{ fontSize: "18px" }}></i>
                                        Logout</button>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}