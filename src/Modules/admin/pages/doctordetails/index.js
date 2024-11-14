import { Header } from '../../component/Header';
import { Footer } from '../../component/Footer';
import { Link } from 'react-router-dom';
import './index.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Admindoctordetails = () => {


    const [view, setview] = useState({})
    // const [special,setspecial]= useState([])
    const { id } = useParams()
    const admin_token=localStorage.getItem("admin_token")
    const headers={'Authorization':`Bearer ${admin_token}`}
    useEffect(() => {

        axios.get(`https://retheesha.pythonanywhere.com/viewdoctor/${id}`,{headers}).then((viewdoctor) => {
            setview(viewdoctor.data.data)
            // setspecial(viewdoctor.data.data.specialist)
            // console.log(viewdoctor.data.data)
        })
    }, [])



    return (
        <>
            <Header />
                <div className="col-md-10 offset-md-10 my-2 mx-12">

                    <Link to={"/admin/homepage"} className="btn btn-move-left btn-link btn-lg "><i class="nc-icon nc-minimal-left"></i>Back to home</Link>

                </div>
                <div class="container">
                    <div class="space-top"></div>
                    <div class="row">
                        {/* {view.map((eachh) => */}
                            <div class="col-md-12">
                                <div class="card card-profile card-plain">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card-img-top">
                                                <a href="javascript:;">
                                                    <img class="img" src="../../assets/img/faces/pexels-karolina-grabowska-4021779.jpg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card-body text-left ml-4">
                                                <h1 className="text-dark"> {view.name} <i className="fa fa-stethoscope "></i>
                                                </h1>
                                                <br />
                                                <h6 className="card-catagory" style={{ color: "#20c997" }}>
                                                    {/* {JSON.parse(view.specialist)}  */}
                                                    {/* {view.specialist} */}
                                                    </h6>
                                                <div className="card-description">
                                                    <i class="fa fa-address-card-o fa-2x mr-4" aria-hidden="true"></i>
                                                    <b>{view.doctor_id}</b>
                                                </div>
                                                <div className="card-description">
                                                    <i class="fa fa-envelope-o fa-2x text-primary mr-4" aria-hidden="true"></i>

                                                    <b>{view.email}</b>
                                                </div>
                                                <div className="card-description">
                                                    <i class="fa fa-phone fa-2x text-info mr-4" aria-hidden="true"></i>
                                                    <b>{view.phone}</b>
                                                </div>
                                                <div className="card-description">
                                                    <i class="fa fa-map-marker fa-2x text-danger mr-4" aria-hidden="true"></i>
                                                    <b>{view.city}</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* )} */}
                    </div>
                </div>

            <Footer />
        </>
    )

}