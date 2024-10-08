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

   

    

    // ------ doctor & users details ------

    const getdetails = () => {
        axios.get("http://agaram.academy/api/action.php?request=ai_health_getalldoctorsdetails").then((e) => {
            setdoctor(e.data.data)
            setsearch(e.data.data)
        })

    }

    useEffect(() => {
        getdetails()
    }, [])

    // ------ search bar doctors and city-----

    const Filter = () => {

        let searchbar = doctor.filter((v, i) => {

            if (v.name == doctorsearch.name && v.city == doctorsearch.city) {
                return v
            }

        })
        setsearch(searchbar)
    }


    // ---- Approving registered doctors ----

    const approvedoctor = (each) => {


        let formData = new FormData();

        formData.append("status","approved")
        formData.append("id",each.id)


// useEffect(() => {

    // }, [])


        axios.post(`http://agaram.academy/api/action.php?request=ai_health_approve_doctor`,formData).then((d) => {

            // getdetails()
            console.log(d)

        }

        )

// if(eachh.status=="approved"){

// }

    }

    // ----- deleting doctor ------

    const deletedoctor = (eachh) => {

        axios.get(`http://agaram.academy/api/action.php?request=ai_health_removedoctor&id=${eachh}`).then((d) => {
            getdetails()

        }

        )
    }

    // ---- View doctors personal details-----

    const doctordetails = (idvalue) => {
        navigate(`/admin/doctordetails/${idvalue}`)

    }


    return (
        <>
            <div className="add-product sidebar-collapse">

                {/* <!-- Navbar --> */}

                <Header />

                <div className="col-md-11 ml-auto mr-auto my-5">
                    <div className="card card-raised card-form-horizontal no-transition">
                        <div className="card-body">
                            <form method="" action="">
                                <div className="row">
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
                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-info btn-block" onClick={() => Filter(doctorsearch)} ><i className="nc-icon nc-zoom-split"
                                        ></i> &nbsp;
                                            Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="section ">
                        <h2 className="text-center title"> Registered Doctors</h2>

                        <div className="col-md-15 ml-auto mr-auto">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="table-info">
                                        <tr>
                                            <th className="text-center"><strong>Doctor's Name</strong></th>
                                            <th className="text-center"><strong>Hospital</strong></th>
                                            <th className="text-center"><strong>City</strong></th>
                                            <th className="text-center"><strong>Status</strong></th>
                                            {/* <th className="text-center"><strong>Reject</strong></th> */}
                                            <th className="text-center"><strong>Details</strong></th>

                                        </tr>

                                    </thead>
                                    <tbody>

                                        {search.map((eachh) =>
                                        
                                            <tr>
                                                <td className="text-center">
                                                    <h6>{eachh.name}</h6>
                                                </td>
                                                <td className=" text-center">
                                                    <h6>{eachh.email}</h6>
                                                </td>
                                                <td className="td-number td-quantity text-center">
                                                    <h6>{eachh.city}</h6>
                                                </td>
                                                <td className=" text-center"><b>{eachh.status}</b>
                                                        {eachh.status=="approved"?<button type="button" className="btn btn-danger btn-link btn-lg" data-toggle="modal" data-target="#smallNoticeModal" onClick={() => deletedoctor(eachh.id)}>
                                                        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                                                    </button>:<button type="button"  className="btn btn-success btn-link btn-lg" onClick={() => approvedoctor(eachh)} ><i className="fa fa-check fa-2x " aria-hidden="true"></i> 
                                                    </button>} 
                                                </td>



                                                <td className=" text-center">
                                                    <button type="button" className="btn btn-info btn-link btn-lg" onClick={() => doctordetails(eachh.id)}><i className="fa fa-user fa-2x" aria-hidden="true"></i>
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

            <Footer/>

        </>
    )
}