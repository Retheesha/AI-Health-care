import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setBooking } from "../../slices/PatientSlice"
import moment from "moment"
import { useEffect, useState } from "react"
import { setDoctorSlotDetails } from "../../slices/bookingSlice"
import { setBooking_slots } from "../../slices/bookingSlice"
import { setpaymentHistory } from "../../slices/HistorySlice"
export const UserBooking = () => {

    const BookingState = useSelector((state) => state.patientdetails).bookingDetails
    const DoctorSlotDetails = useSelector((state) => state.user_doctor_slot).dotor_slot_details
    const booked_slots = useSelector((state) => state.user_doctor_slot).booking_slots
    const paymentHistoryState = useSelector((state) => state.userhistory).paymentHistory
    // console.log(DoctorSlotDetails)
    const dispatch = useDispatch()


    const [mindate, setmindate] = useState("")
    const [maxdate, setmaxdate] = useState("")
    const [selectedDay, setSelectedDay] = useState('');
    // console.log(selectedDay) 
    useEffect(() => {
        const today = moment()

        const tomorrow = moment(today).add(1, "days");

        setmindate(tomorrow.format('YYYY-MM-DD'))

        const max = moment(tomorrow).add(6, 'days')
        setmaxdate(max.format('YYYY-MM-DD'))

    })
    //getting url params
    const searchParams = new URLSearchParams(window.location.search)
    const param1 = searchParams.get('doctorid')
    const param2 = searchParams.get('enquiry_id')

    const user_token=localStorage.getItem("user_token")
    const headers={'Authorization':`Bearer ${user_token}`}
    // getting doctor slot details
    useEffect(() => {
        
            // axios.get(`http://agaram.academy/api/action.php?request=ai_health_get_slot_booking&doctor_id=${param1}`).then((res) => {
            axios.get(`https://retheesha.pythonanywhere.com/getuniquedoctorslot/${param1}`,{headers}).then((res) => {
                console.log(res.data.data)
                if(res.data.data!=null)
                    dispatch(setDoctorSlotDetails(JSON.parse(res.data.data.clinic_details)))
             })
             .catch((error) => {
              
                if (error.response && error.response.status === 401 || error.response.status === 422) {
                  // return <Navigate to="/user/login"/>
                  window.location.href = '/user/login'; 
                } else {
                  console.error('Error fetching doctor data:', error);
                }
              });
                       
        
       

    }, [])
    let doctor = DoctorSlotDetails.filter((e) => {
        return selectedDay == e.clinic_day
    }
    )
    const [isClicked, setisClicked] = useState(true)
    const [newDoctorSlotDetails, setnewDoctorSlotDetails] = useState([])
    let newSlots = newDoctorSlotDetails.filter((e) => {
        return selectedDay == e.clinic_day
    })

    
    const paynow = () => {

        setnewDoctorSlotDetails(DoctorSlotDetails.filter((e) => { return e.clinic_day != selectedDay && e.clinic_timing != booked_slots.booking_time }))

        const formdata = new FormData();
        formdata.append("request", "ai_health_create_doctor_appointment")
        formdata.append("booking_date", BookingState.booking_date)
        formdata.append("booking_time", BookingState.booking_time)
        formdata.append("doctor_id", param1)
        formdata.append("enquiry_id", param2)

        axios.post(`https://retheesha.pythonanywhere.com/createdoctorapp`, formdata).then((res) => {
            // console.log(res) 
            dispatch(setBooking_slots(res.data.data))
            dispatch(setpaymentHistory([...paymentHistoryState, res.data.data]))

        })
    }

    return (<>
        <Header />
        <div className="team-5  bg-light" style={{ backgroundImage: "url('../../../../../public/assets/img/sections/doctor_online.jpg')" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto text-center">
                        <h2 className="text-dark"><b>Book Now!</b></h2>
                        <h5 className="description text-dark mt-2">Skip the travel!
                            Take Online Doctor Consultation</h5>

                    </div>

                </div>
                <div className="row">

                    <div className="col-md-9">
                        <div className="card card-profile card-plain">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card-img-top">
                                        <a href="javascript:;">
                                            <img className="img" src="../../assets/img/sections/doctor_online.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body text-left">
                                        <div className="row">
                                            <div className="col-8"><input className="form-control" placeholder="date" type="date" min={mindate} max={maxdate}
                                            onChange={(e) =>{setSelectedDay(moment(e.target.value).format('dddd'));
                                                dispatch(setBooking({ ...BookingState, booking_date: e.target.value }))}
                                            }/></div>
                                            <div className="text-success col-4 mt-2">{selectedDay}</div>
                                            <div>{DoctorSlotDetails.consulting_fee}</div>
                                        </div>
                                        <div className="row">{isClicked ? doctor.map((e) =>
                                            <button className="col-5 form-control btn-success my-4 mx-3" value={e.clinic_timing} onClick={(e) => {
                                                dispatch(setBooking({ ...BookingState, booking_time: e.target.value }))
                                            }}>{e.clinic_timing}</button>)
                                            :DoctorSlotDetails.length>0?newSlots.map((e) =>
                                                <button className="col-5 form-control btn-success my-4 mx-3" value={e.clinic_timing} onClick={(e) => {
                                                    dispatch(setBooking({ ...BookingState, booking_time: e.target.value }))
                                                }}>{e.clinic_timing}</button>
                                            ):""}</div>

                                        <button type="button" className="btn btn-success btn-round my-3" data-toggle="modal" data-target="#smallNoticeModal" onClick={() => { paynow(); setisClicked(false) }}>
                                            Pay Now
                                        </button>
                                        {/* <button className="btn btn-success my-3" >Pay now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="text-dark my-5 "><b>Easily schedule your appointment with us. Just select your doctor, choose a date and time, and provide your information. You’ll receive a confirmation email shortly after. If you have any questions, feel free to contact us!</b></p>
                    </div>




                </div>
            </div>
            <div className="modal fade" id="smallNoticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm modal-notice">
                <div className="modal-content">
                    <div className="modal-header no-border-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body text-center">
                        <p><i className="fa fa-thumbs-up fa-2x text-success" aria-hidden="true"></i><strong className="mx-2">Booked Successfully</strong></p>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link" data-dismiss="modal" aria-hidden="true">Okay</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        
    </>)


}