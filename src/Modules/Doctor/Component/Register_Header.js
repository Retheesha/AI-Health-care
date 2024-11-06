import { Link } from "react-router-dom"

export const Doct_Reg_Log_Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent w-75 mx-auto" color-on-scroll="500">
                <div className="container text-center">
                    <div className="navbar-translate reg-logo">
                        <Link className="navbar-brand" to="#" rel="tooltip" title="AI Health Care" data-placement="bottom" target="_blank">
                            <img src="../../assets/img/sections/doctor/Blue/AIH_Logo_Blue_CR.png" />
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
        </>
    )
}