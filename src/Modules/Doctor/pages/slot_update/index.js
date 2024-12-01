import { useState, useEffect, useCallback } from "react"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { set_slot_data, get_slot_data,Updated_clinic_details } from "../../slices/slotSlice"

import axios from "axios"

export const Update_Doctor_Slot = () => {

    // sumbit data globe state start 

    const get_slot_state = useSelector((state) => state.doctor_slot_state).getSlotListSlice
    // const clinc_details_state=useSelector((state) => state.doctor_slot_state).getSlotListSlice.clinic_details
    console.log(get_slot_state.clinic_details)
    // console.log(clinc_details_state)
    // sumbit data globe state end 

    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin

    const [clinic_details, setClinicDetails] = useState([])

    const set_dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        // axios.get(`http://agaram.academy/api/action.php?request=ai_health_get_slot_booking&doctor_id=${doctorLoginSubmit.data.id}`).then((doctor_booked_slot_all) => {
            axios.get(`https://retheesha.pythonanywhere.com/getuniquedoctorslot/${doctorLoginSubmit.data.id}`).then((doctor_booked_slot_all) => { 
            set_dispatch(get_slot_data(doctor_booked_slot_all.data.data))
            // set_dispatch(Updated_clinic_details(doctor_booked_slot_all.data.data.clinic_details))
            setClinicDetails(JSON.parse(doctor_booked_slot_all.data.data.clinic_details))
            
        })
    },[]
    )

    // add slot local state starts 

    const [getList, addList] = useState({
        consulting_fee: "",
        clinic_details: []
    })

    const [detail, setDetail] = useState({
        clinic_day: "",
        clinic_timing: ""
    })

    // add slot local state end 


    


    // delete slot starts

    const [slotList, setSlotList] = useState([])

    // delete slot end

    const handledChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }


    const addSlotList = () => {
        const list_data = { ...getList, clinic_details: [...getList.clinic_details, detail] }
        addList(list_data)

    }


    const updateslots = () => {

        // set_dispatch(set_slot_data(slotList))
        navigate("/doctor/home")

        const slot_data = new FormData()
        slot_data.append("request", "ai_health_update_slots")
        slot_data.append("doctor_id", doctorLoginSubmit.data.id)
        // slot_data.append("doctor_id", getList.doctor_id)
        slot_data.append("consulting_fee", getList.consulting_fee)
        slot_data.append("clinic_details", JSON.stringify(getList.clinic_details))


        axios.post("https://retheesha.pythonanywhere.com/createdoctorslot", slot_data).then((response) => {
            console.log(response.data)

        })

    }



    const[editdata,SetEditdata]=useState([])
    const edit = (index) => {

        const data = clinic_details.filter((getListvalues, getListindex) => {
            if (index == getListindex) {
                return getListvalues
            }
        })
        SetEditdata(data)

    }

    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="row">
                    <div className="col-md-6 col-sm-6 mx-auto ">
                        <h2>Update Visiting Time Slot</h2>
                        <hr />
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
                        {editdata.map((e)=>
                        <div className="row">

                            <div className="col-md-4 col-sm-4">
                                <h6>Select  Day</h6>
                                <hr />
                                {/* <select name="huge" className="form-select" data-style="btn btn-outline-default btn-block" style={{ height: "40px" }} data-menu-style="" onKeyUp={(e) => addList({ ...getList,clinic_details [{clinic_day: e.target.value}] })} > */}
                                
                                <select type='dropdown' name="clinic_day" className="form-select" data-style="btn btn-outline-default btn-block" style={{ height: "40px" }} data-menu-style="" onClick={handledChange} >
                                    <option disabled selected>Select Day</option>
                                    
                                    <option value={e.clinic_day}>{e.clinic_day}</option>
                                    
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>

                                {/* <input type="text" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: Sunday)" onKeyUp={(e) => addList({ ...getList, clinic_day: e.target.value })} /> */}
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h6>Timing</h6>
                                <hr />
                                 
                                <select name="clinic_timing" className="form-select" data-style="btn btn-outline-default btn-block" style={{ height: "40px" }} onClick={handledChange}>
                               
                                    {/* <option value={e.clinic_timing}>{e.clinic_timing}</option> */}
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
                            <div className="col-md-4 col-sm-4">
                                <h6> Consultation Fee</h6>
                                <hr />
                                <button className="btn btn-danger btn-block"><i className="fa fa-inr" aria-hidden="true"></i>100</button>
                                <input type="number" className="form-control border-secondary p-0 text-center" placeholder="₹ 100" onKeyUp={(e) => addList({ ...getList, consulting_fee: e.target.value })} />
                            </div>
                            <button className="btn btn-primary btn-block btn-round w-25 mt-5 mx-auto" type="button" onClick={addSlotList}>ADD</button>
                        </div>
 )} 
                        {/* <hr /> */}

                    </div>
                </div>
                {/* <hr /> */}
                <div className="main">
                    <div className="section pt-3">
                        <div className="container">
                            <h3 className="text-center title">  Added Visit Time List</h3>
                            <div className="col-md-10 ml-auto mr-auto">
                                <div className="table-responsive">
                                    <table className="table table-shopping">
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

                                            {
                                                clinic_details.map((e, index) => {
                                                    return (
                                                        // console.log(index)
                                                        <tr key={index}>
                                                            <td className="text-center">
                                                                <h6>{e.clinic_day}</h6>
                                                            </td>
                                                            <td className="td-number text-center">
                                                                <h6>{e.clinic_timing}</h6>
                                                            </td>
                                                            <td className="td-number text-center">
                                                                <h6>{get_slot_state.consulting_fee}</h6>
                                                            </td>
                                                            <td className="td-number text-center">
                                                                <button className="btn btn-outline-danger" type="button" onClick={() => edit(index)}>Edit</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }

                                                )
                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-5 col-sm-8 " >
                            <button className="btn btn-success btn-block" type="button" onClick={()=>updateslots()}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}