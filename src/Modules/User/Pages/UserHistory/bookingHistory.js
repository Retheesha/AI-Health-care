import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useSelector,useDispatch } from "react-redux"
import { setpatientHisory } from "../../slices/HistorySlice"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
export const PaymentHistory = () => {

   const paymentHistoryState=useSelector((state)=>state.userhistory).paymentHistory
   const patientState = useSelector((state) => state.patientdetails).patientDetails
   
    const navigate=useNavigate()          
    const dispatch=useDispatch()             
    const deleteHistory=(index)=>{
        console.log(index)
        // let DeleteHistory=HistoryState.filter((each,historyindex)=>{
        //     if(index!=historyindex){
        //         return(each)
        //     }
        // }
        // )
        // console.log(DeleteHistory)
        // dispatch(setpatientHisory(DeleteHistory))
        // axios.delete("http://agaram.academy/api/action.php?request=ai_health_remove_patient").then((res) => {
        //     console.log(res)
        //   })
    }   
    
    return (<>
       
        <Header/>
            <div className="main">
                <div className="section ">
                    <div className="container">
                        <h3 className="text-center title">Patient History</h3>
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="table-responsive">
                                <table className="table table-shopping">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Time</th>
                                            <th className="text-center">Date</th>
                                            <th className="text-center">View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         {paymentHistoryState.map((e,i)=>
                                            <tr>
                                            <td className="text-center">
                                                <h6>{patientState.name}</h6>
                                            </td>
                                            <td className="td-product text-center">
                                            <h6>{e.booking_time}</h6>
                                            </td>
                                            <td className="td-price text-center">
                                                <h6>{e.booking_date}</h6>
                                            </td>
                                            {/* <td className="td-number td-quantity text-center">
                                                <button type="button" className="btn btn-outline-info btn-round"onClick={()=>navigate(`/user/viewdetails/${i}`)}>View</button>
                                            </td> */}
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
    </>)
}