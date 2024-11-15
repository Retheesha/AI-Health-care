
import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import './index.css'


import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Adminusers = () => {

    let [users, setuser] = useState([])
    useEffect(() => {

    }, [])

    const navigate = useNavigate();
    const admin_token=localStorage.getItem("admin_token")
    const headers={'Authorization':`Bearer ${admin_token}`}

    const getusers = () => {

        axios.get("https://retheesha.pythonanywhere.com/getuserdata",{headers}).then((e) => {

            setuser(e.data)
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
        getusers()
    }, [])


    return (
        <>

            <div className="add-product sidebar-collapse">
                {/* <!-- Navbar --> */}
                <Header />


                {/* <!-- End Navbar --> */}
                <div className="main">
                    <div className="section">
                        <h2 className="text-center title">Users  Details</h2>
                        <div className="col-md-15 ml-auto mr-auto">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th className="text-center" ><b>Sl.No</b></th>
                                            <th className="text-center" ><b>Name</b></th>
                                            <th className="text-center"><b>Mail Address</b></th>
                                            <th className="text-center"><b>Contact</b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((eachh,index) =>
                                            <tr>
                                                <td className="text-center">
                                                    <strong>{index + 1})</strong>
                                                </td>
                                                <td className="text-center">
                                                    <h6>{eachh.user_Name}</h6>
                                                </td>
                                                <td className=" text-center">
                                                    <h6>{eachh.user_Email}</h6>
                                                </td>
                                                <td className=" text-center">
                                                    <h6>{eachh.phone}</h6>
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
        </>)
}
