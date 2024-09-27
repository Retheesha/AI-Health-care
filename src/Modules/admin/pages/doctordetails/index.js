import { Header } from '../../component/Header';
import { Footer } from '../../component/Footer';
import { Link } from 'react-router-dom';
import './index.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Admindoctordetails = () => {


    const [view, setview] = useState({})

    const { id } = useParams()
    // console.log(id)

    useEffect(() => {

        axios.get(`http://agaram.academy/api/action.php?request=getMemberDetail&id=${id}`).then((viewdoctor) => {
            setview(viewdoctor.data.data)
        })
    }, [])



    return (
        <>


            <div className="add-product sidebar-collapse">
                {/* <!-- Navbar --> */}
                <Header />

                <br />


                <div className="typography-line">
                    <h1 className="text-info"> {view.name} <i className="fa fa-stethoscope "></i>
                    </h1>
                </div>
                <br />


                <div className="container">
                    <div className="col-md-8 col-sm-8">
                        <div className="card card-blog">
                            <div className="card-image">
                                <a href="javascript:;">
                                    <img className="img" src="../../assets/img/faces/pexels-karolina-grabowska-4021779.jpg" />
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Specialist </h4>
                                <hr />
                                <div className="card-description">
                                    <h4>{view.aadhar}</h4>
                                </div>
                                <hr />
                                <div className="card-description">
                                    <h4>Hospital Name</h4>
                                </div>
                                <hr />
                                <div className="card-description">
                                    <h4>{view.area}</h4>
                                </div>
                                <hr />
                                <div className="card-description">
                                    <h4>{view.email}</h4>
                                </div>
                                <hr />
                                <div className="card-description">
                                    <h4>{view.phone}</h4>
                                </div>
                                <hr />
                                <div className="card-description">
                                    <h4>{view.city}</h4>
                                </div>
                                <hr />

                                <div className="card-footer">
                                    {/* <div className="author">
                                        <a href="javascript:;">
                                            <img src="../../assets/img/faces/pexels-karolina-grabowska-4021779.jpg" alt="..." className="avatar img-raised" />
                                            <span className="text-default">Dr.Balachandar</span>
                                        </a>
                                    </div> */}


                                    <div className="social">
                                        <button href="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                                        <button href="#paper-kit" className="btn btn-just-icon btn-google" ><i className="fa fa-google"></i></button>
                                        <button href="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                    
                

                </div>
                <div className="col-md-4 offset-md-4 my-5 mx-6">
                       
                       <Link to={"/admin/homepage"}  className="btn btn-move-left btn-secondary btn-lg btn-round"><i class="nc-icon nc-minimal-left"></i>Back to home</Link>
                   </div>
            </div>
            <Footer />
        </>
    )

}