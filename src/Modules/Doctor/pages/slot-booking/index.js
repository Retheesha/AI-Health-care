import { useState, useEffect, useCallback } from "react"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { set_slot_data } from "../../slices/slotSlice"
import axios from "axios"
import "./index.css"

export const DoctorSlot = () => {

    // sumbit data globe state start 

    const get_slot_state = useSelector((state) => state.doctor_slot_state).doctorSlotSlice

    // sumbit data globe state end 

    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin
    const set_dispatch = useDispatch()
    const navigate = useNavigate()

    // add slot local state starts 

    const [getList, addList] = useState({
        consulting_fee: "",
        clinic_details: []
    })
    console.log(getList.clinic_details)
    const [detail, setDetail] = useState({
        clinic_day: "",
        clinic_timing: ""
    })

    let a = 1;
    console.log(a)

    // add slot local state end 


    // delete slot starts

    // const [slotList, setSlotList] = useState([])

    // delete slot end

    const handledChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }


    const addSlotList = () => {
        const list_data = { ...getList, clinic_details: [...getList.clinic_details, detail] }
        addList(list_data)
    }


    const handledSumbit = () => {

        // set_dispatch(set_slot_data(slotList))
        navigate("/doctor/home")

        const slot_data = new FormData()

        slot_data.append("doctor_id", doctorLoginSubmit.data.id)
        slot_data.append("consulting_fee", getList.consulting_fee)
        slot_data.append("clinic_details", JSON.stringify(getList.clinic_details))
        // slot_data.append("doctor_id", getList.doctor_id)



        axios.post("https://retheesha.pythonanywhere.com/createdoctorslot", slot_data).then((response) => {
            // console.log(response.data)


        })

    }


    const slotDelete = (index) => {
// <<<<<<< doctor-module-2

//         const data = getList.clinic_details.filter((getListvalues, getListindex) => {
//             if (index != getListindex) {
//                 return getListvalues
//             }
//         })
//         addList(data)
// =======
        console.log(index)
        const data = getList.clinic_details.filter((getlistvalues, getListindex) => getListindex !== index);
        addList(prevState => ({
            ...prevState,
            clinic_details: data
        }));
        // console.log(data)
// >>>>>>> submaster

    }


    // const slotDelete = (index) => {

    //     const data = getList.filter((getListvalues, getListindex) => {
    //         if (index != getListindex) {
    //             return getListvalues
    //         }
    //     })
    //     addList(data)

    // }

    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="row">
                    <div className="col-md-8 col-sm-6 mx-auto ">
                        <h2 className="slot-book-head text-secondary">BOOKING TIME SLOT</h2>
                        {/* <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <h4> Day</h4>
                                <hr />
                                <div className="form-group">
                                    <select name="huge" className="selectpicker" data-style="btn btn-outline-default btn-block "
                                        data-menu-style="">
                                        <option disabled selected> Select Day</option>
                                        <option value="1"><input /> Sunday </option>
                                        <option value="2">Monday </option>
                                        <option value="3">Tuesday</option>
                                        <option value="4">Wednesday</option>
                                        <option value="5">Thursday </option>
                                        <option value="6">Friday</option>
                                        <option value="7">Saturday</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                        <div className="row">

                            <div className="col-md-3 col-sm-4">
                                <h6>Select Day</h6>
                                <hr />
                                {/* <select name="huge" className="form-select" data-style="btn btn-outline-default btn-block" style={{ height: "40px" }} data-menu-style="" onKeyUp={(e) => addList({ ...getList,clinic_details [{clinic_day: e.target.value}] })} > */}
                                <select type='dropdown' name="clinic_day" className="form-select" data-style="btn btn-outline-default btn-block" style={{ height: "40px" }} data-menu-style="" onClick={handledChange} >
                                    <option disabled selected>Select Day</option>
                                    <option value="Sunday">Sunday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>

                                {/* <input type="text" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: Sunday)" onKeyUp={(e) => addList({ ...getList, clinic_day: e.target.value })} /> */}
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <h6>Select Timing</h6>
                                <hr />
                                <select name="clinic_timing" className="form-select" data-style="btn btn-outline-default btn-block" style={{ height: "40px" }} onClick={handledChange}>
                                    <option value="select time">Select Time</option>
                                    <option value="9am to 10am">9am to 10am</option>
                                    <option value="10am to 12pm">10am to 12pm</option>
                                    <option value="10am to 1pm">10am to 1pm</option>
                                    <option value="2pm to 4pm">2pm to 4pm</option>
                                    <option value="5pm to 7pm">5pm to 7pm</option>
                                    <option value="Holiday">Holiday</option>

                                </select>
                                {/* <div className="form-group">
                                        <select name="huge" className="selectpicker" data-style="btn btn-outline-default btn-block"
                                            data-menu-style="">
                                            <option disabled selected>Select Time</option>
                                            <option value="1">10 AM to 12Am </option>
                                            <option value="2">2 PM to 4 PM </option>
                                            <option value="3">6 PM to 8 PM</option>
                                        </select> */}

                                {/* <input type="text" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: 10 to 5)" onKeyUp={(e) => addList({ ...getList, clinic_timing: e.target.value })} /> */}
                                {/* </div> */}
                            </div>
                            {/* <div className="col-md-3 col-sm-4">
                                <h6>Patient Limit</h6>
                                <hr />
                                <select name="huge" className="form-select" data-style="btn btn-outline-default btn-block" style={{height:"40px"}} onClick={(e)=>addList({...getList, patients_limit: e.target.value})}>
                                    <option value="Select Patient Limit">Select Patient Limit</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    <option value="35">35</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div> */}
                            <div className="col-md-3 col-sm-4">
                                <h6> Consultation Fee</h6>
                                <hr />
                                {/* <button className="btn btn-danger btn-block"><i className="fa fa-inr" aria-hidden="true"></i>100</button> */}
                                <input type="number" className="form-control form-inputs border-secondary p-0 text-center" placeholder="Enter Fee ₹ 100" onKeyUp={(e) => addList({ ...getList, consulting_fee: e.target.value })} />
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <h6> Action</h6>
                                <hr />
                                <button className="btn btn-primary btn-block btn-round form-button" type="button" onClick={addSlotList}>ADD</button>
                            </div>
                        </div>

                        {/* <hr /> */}

                    </div>
                </div>
                {/* <hr /> */}
                <div className="main body-bg">
                    <div className="section pt-3 body-bg">
                        <div className="container px-5">
                            <h4 className="text-center title mt-5 mb-0 py-3 slot-added">  Added Visit Time List</h4>
                            <div className=" ml-auto mr-auto">
                                <div className="table-responsive">
                                    <table className="table table-shopping table-striped tableslotDelete-color">
                                        <thead>
                                            <tr>
                                                {/* <!-- <th className="text-center"></th>
                                            <th></th> --> */}
                                                <th className="text-center"><strong>Day</strong></th>
                                                <th className="text-center"><strong>Timing</strong></th>
                                                <th className="text-center"><strong>amount</strong></th>
                                                <th className="text-center"><strong>Delete</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {getList.clinic_details && getList.clinic_details.length > 0 ? 
                                             getList.clinic_details.map((e, index) => 
                                                        // console.log(index)
                                                        <tr key={index}>
                                                            <td className="text-center py-2">
                                                                <h6>{e.clinic_day}</h6>
                                                            </td>
                                                            <td className="td-number text-center py-2">
                                                                <h6>{e.clinic_timing}</h6>
                                                            </td>
                                                            <td className="td-number text-center py-2">
                                                                <h6>{getList.consulting_fee}</h6>
                                                            </td>
                                                            <td className="td-number text-center py-2">
                                                                <button className="btn btn-outline-danger" type="button" onClick={()=>slotDelete(index)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    ):""

                                                
                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-5 col-sm-8 " >
                            <button className="btn btn-success btn-block" type="button" onClick={handledSumbit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}