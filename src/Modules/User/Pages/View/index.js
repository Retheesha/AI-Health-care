import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useDispatch, useSelector } from "react-redux"
import { setpatientHisory } from "../../slices/HistorySlice"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
export const Userview = () => {
    const HistoryState = useSelector((state) => state.userhistory).patienthistory
    const patientState = useSelector((state) => state.patientdetails).patientDetails
    const AllopathicState=useSelector((state)=>state.ai_tips).ai_details.allopathic
    const SiddhaState=useSelector((state)=>state.ai_tips).ai_details.siddha
    const FoodState=useSelector((state)=>state.ai_tips).ai_details.food


    console.log(AllopathicState)



    const dispatch = useDispatch()
    const save = () => {
        dispatch(setpatientHisory([...HistoryState, patientState]))
    }
    
    return (<>

        <Header />
        <div className="container" style={{marginTop:"100px"}}>
            <div className="row" >
                <div className="col-md-11 mx-auto">
                    {/* <div className="card card-blog" style={{ backgroundColor: "#6489b117" }}> */}
                    {/* <div className="card-body w-75 mx-auto"> */}
                    <label className="badge badge-pill badge-warning p-3"></label>
                    <div className="row">
                        <div className="col-6">
                            <h3 className="text-success text-end" style={{ fontWeight: "600" }}>{patientState.name ? patientState.name : "name"}</h3>
                            <h4 className=" text-success" style={{ fontWeight: "500" }}>{patientState.blood_group ? patientState.blood_group : "0-positive"}</h4>
                            <h4 className=" text-success" style={{ fontWeight: "500" }}>{patientState.duration ? patientState.duration : "2 days"}</h4>
                        </div>
                        <div className="col-6">
                            <h4 className=" text-success" style={{ fontWeight: "500" }}>19-09-2024</h4>
                            <h4 className="text-success" style={{ fontWeight: "500" }}>{patientState.gender ? patientState.gender : ""}</h4>
                            <h4 className=" text-success" style={{ fontWight: "500" }}>{patientState.age ? patientState.age : ""}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <div className="card card-plain card-blog">
                                <div className="row">
                                    <div className="col-md-4 mt-5">
                                        <div className="card-image">
                                            <img className="img" src="../../assets/img/user/2-2-2-2foodgroups_vegetables_detailfeature.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-category text-info">Foods Taken</h3>
                                            <h3 className="card-title">
                                           </h3>
                                            <p className="fw-bold h5 ">
                                                {FoodState}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-plain card-blog">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-category text-danger">
                                                Allopathic Medicine
                                            </h3>
                                            <h3 className="card-title">
                                         </h3>
                                            <p className="fw-bold h5">
                                                {AllopathicState}                        
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <div className="card-image">
                                            <a href="javascript:;">
                                                <img className="img" src="../../assets/img/user/allopathic-medicine.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-plain card-blog">
                                <div className="row">
                                    <div className="col-md-4 mt-5">
                                        <div className="card-image">
                                            <a href="javascript:;">
                                                <img className="img" src="../../assets/img/user/Siddha-medicine.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-category text-success">
                                                Siddha Medicine
                                            </h3>
                                            <h3 className="card-title">
                                                
                                            </h3>
                                            <p className="fw-bold h5">
                                                {SiddhaState}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> <button type="button" className="btn btn-danger btn-block mb-3 mx-auto mt-5" style={{ width: "9%" }} onClick={() => save()}>Save</button></div>
                </div>
            </div>
        </div>




        <Footer />

    </>)
}