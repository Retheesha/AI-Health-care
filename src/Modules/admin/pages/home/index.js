import './index.css';

import { Header } from "../../component/Header"
import { Footer } from '../../component/Footer';

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"

export const Adminhomepage = () => {

    const navigate = useNavigate();

    let [doctor, setdoctor] = useState([])
    let [search, setsearch] = useState(doctor)
    let [doctorsearch, setdoctorsearch] = useState({ city: "", name: "" })





    // ------ doctor details ------
    const doctor_token=localStorage.getItem("doctor_token")
    const headers={'Authorization':`Bearer ${doctor_token}`}
    const getdetails = () => {

        axios.get("https://retheesha.pythonanywhere.com/getdoctordata",{headers}).then((e) => {

            setdoctor(e.data)
            setsearch(e.data)
        })
        .catch((error) => {
              
            if (error.response && error.response.status === 401 || error.response.status === 422) {
              // return <Navigate to="/user/login"/>
              window.location.href = '/'; 
            } else {
              console.error('Error fetching doctor data:', error);
            }
          }); 

    }

    useEffect(() => {
        getdetails()
    }, [])

    // ------ search bar doctors and city-----

    const Search = () => {

        let searchbar = doctor.filter((v, i) => {

            return v ? v.name.toLowerCase() == doctorsearch.name || v.city.toLowerCase() == doctorsearch.city : v.name.toLowerCase() == doctorsearch.name && v.city.toLowerCase() == doctorsearch.city




        })
        setsearch(searchbar)
        // getdetails()
        if (doctorsearch == "") {
            getdetails()
        }
        // doctorsearch>0?  setsearch(searchbar) :
        // getdetails() 


    }



    // ---- Approving registered doctors ----

    const approvedoctor = (each) => {


        let formData = new FormData();

        formData.append("status", "approved")
        formData.append("id", each.id)



        axios.post("https://retheesha.pythonanywhere.com/approvedoctor", formData).then((d) => {

            getdetails()
            console.log(d)

        })
    }


    // ------- Deleting doctor -------

    const deletedoctor = (eachh) => {


        axios.delete(`https://retheesha.pythonanywhere.com/delete/${eachh}`).then((d) => {

            getdetails()

        }

        )
    }

    // ------ View doctors personal details ------

    const doctordetails = (idvalue) => {
        navigate(`/admin/doctordetails/${idvalue}`)

    }


    return (
        <>
            <div className="add-product sidebar-collapse">

                {/* <!-- Navbar --> */}

                <Header />





                <div class="page-header" style={{ backgroundImage: "url('../../assets/img/sections/pexels-tima-miroshnichenko-5452301.jpg" }}>
                    <div class="filter"></div>
                    <div class="content-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 ml-auto mr-auto text-center">
                                    <h1 class="title"> Find Registered Doctor's</h1>
                                    <br />
                                </div>

                                <div className="col-md-12 ml-auto mr-auto my-12">
                                    <div className="card card-raised card-form-horizontal no-transition">
                                        <div className="card-body">
                                            <form method="" action="">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Doctor name" className="form-control"

                                                                onKeyUp=
                                                                {(e) => setdoctorsearch({
                                                                    ...doctorsearch,
                                                                    name: e.target.value
                                                                })}

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="City" className="form-control"

                                                                onKeyUp=
                                                                {(e) => setdoctorsearch({
                                                                    ...doctorsearch,
                                                                    city: e.target.value
                                                                })}

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button type="button" className="btn btn-block btn-secondary" onClick={() => Search(doctorsearch)} ><i className="nc-icon nc-zoom-split"
                                                        ></i> &nbsp;
                                                            Search</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="main">
                    <div className="section ">
                        <h2 className="text-center title">All Registered Doctors</h2>

                        <div className="col-md-15 ml-auto mr-auto">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="table-secondary" >
                                        <tr>
                                            <th className="text-center"><strong>Sl.No</strong></th>
                                            <th className="text-center"><strong>Doctor's Name</strong></th>
                                            <th className="text-center"><strong>Email</strong></th>
                                            <th className="text-center"><strong>City</strong></th>
                                            <th className="text-center"><strong>Status</strong></th>
                                            <th className="text-center"><strong>Accept / Reject</strong></th>
                                            <th className="text-center"><strong>Details</strong></th>
                                            <th className="text-center"><strong>Cancel Register</strong></th>


                                        </tr>

                                    </thead>
                                    <tbody>

                                        {search.map((eachh, index) =>

                                            <tr >
                                                <td className="text-center" key={index}>
                                                    <strong className='text-dark'>{index + 1})</strong>

                                                </td>
                                                <td className="text-center">
                                                    <h6>{eachh.name}</h6>
                                                </td>
                                                <td className=" text-center">
                                                    <h6>{eachh.email}</h6>
                                                </td>
                                                <td className="text-center">
                                                    <h6>{eachh.city}</h6>
                                                </td>
                                                <td className=" text-center"><b>{eachh.status}</b>

                                                    {eachh.status == "approved" ?
                                                        <i className="fa fa-check fa-2x" aria-hidden="true"></i>
                                                        : <div className="uil-reload-css reload-small ml-3"  >
                                                            <div ></div>
                                                        </div>
                                                    }
                                                </td>
                                                <td className=" text-center">
                                                    {eachh.status == "approved" ?
                                                        <button type="button" className="btn btn-danger btn-link btn-lg" data-toggle="modal" data-target="#smallNoticeModal" onClick={() => deletedoctor(eachh.id)}>delete</button> :
                                                        <button type="button" className="btn btn-success btn-link btn-lg" onClick={() => approvedoctor(eachh)} >approve</button>

                                                    }

                                                </td>

                                                <td className=" text-center">
                                                    <button type="button" className="btn btn-info btn-link btn-lg" onClick={() => doctordetails(eachh.id)}><i className="fa fa-user fa-2x" aria-hidden="true"></i>
                                                    </button>

                                                </td>

                                                <td className=" text-center">
                                                    <button type="button" className="btn btn-danger btn-link btn-lg" onClick={() => deletedoctor(eachh.id)}><i className="fa fa-times fa-2x" aria-hidden="true"></i>
                                                    </button>

                                                </td>


                                            </tr>
                                        )}


                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}