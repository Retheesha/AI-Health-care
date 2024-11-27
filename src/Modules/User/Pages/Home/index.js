import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import { useSelector, useDispatch } from "react-redux"
import { setPatient } from "../../slices/PatientSlice"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { updateDiseases, setage } from "../../slices/PatientSlice"
import { setFooddetails,setAllopathicdetails,setSiddhadetails} from "../../slices/AItipsSlice"
import axios from "axios"
import moment from "moment"
import './index.css'
export const Userhome = () => {

    const navigate = useNavigate()
    
    const patientState = useSelector((state) => state.patientdetails).patientDetails
    const diseasesarr = useSelector((state) => state.patientdetails).patientDetails.diseases
    let ageinput = useSelector((state) => state.patientdetails).patientDetails.age
    console.log(ageinput)
    console.log(patientState.diseases)
    const [diseaseslist, setdiseases] = useState("")
    // const [birthDate, setBirthDate] = useState('');
    const add = () => {
        dispatch(updateDiseases([...patientState.diseases, diseaseslist]))
    }
    const dispatch = useDispatch()
    const calculateAge = (date) => {
        return moment().diff(moment(date), 'years')
    };
    const question = `list me the solution for given diseases/problems ${diseasesarr} and considering the following details:

                            Days of infection:${patientState.duration}
                            Age:${patientState.age}
                            Please generate a detailed response in the following format:

                            ALLOPATHIC: Provide a description of allopathic medicines 
                            SIDDHA: Provide a description of Siddha medicines  
                            FOOD: Provide a detailed description of food to be taken`
    // const question = `diseases:${diseasesarr}.\n Generate allopathic,Siddha medicines and food that related only with the given diseases and the format must be in the below sample format                      
    //                     ALLOPATHIC: SAMPLE_TEXT
    //                     SIDDHA: SAMPLE_TEXT
    //                     FOOD: COMPLETE DISCRIPTION`
    const selftreatment = async (event) => {

        const apikey = "AIzaSyCuzZ8Cyn3GdiXc-KFSE7jLXTNMvPYuzp0"

        axios({
            url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apikey}`,
            method: "POST",
            data: {
                contents: [
                    { parts: [{ text: question }] },
                ]
            },
        }).then((response) => {
            console.log(response)
            console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
            const text= response['data']['candidates'][0]['content']['parts'][0]['text']
           
           

            let startAllopathic = text.indexOf("ALLOPATHIC")+"ALLOPATHIC".length
            let endAllopathic = text.indexOf("SIDDHA");  
            let allopathictext = text.substring(startAllopathic, endAllopathic);
            console.log(allopathictext)
            dispatch(setAllopathicdetails(allopathictext))
    
            let startSiddha = text.indexOf("SIDDHA")+"SIDDHA".length   
            let endSiddha = text.indexOf("FOOD");  
            let Siddhatext = text.substring(startSiddha, endSiddha);
            dispatch(setSiddhadetails(Siddhatext))
    
            let startFood = text.indexOf("FOOD")+"FOOD".length  
            let Foodtext = text.substring(startFood);
            dispatch(setFooddetails(Foodtext))

            
        })
        navigate('/user/view')
      
    }
    
   
   

    const user_token = localStorage.getItem("user_token")
    const headers = { 'Authorization': `Bearer ${user_token}` }
    const doctorappointment = () => {
        const formdata = new FormData();
        formdata.append("request", patientState.request)
        formdata.append("name", patientState.name)
        formdata.append("gender", patientState.gender)
        formdata.append("blood_group", patientState.blood_group)
        formdata.append("age", patientState.age)
        formdata.append("diseases", JSON.stringify(patientState.diseases))
        formdata.append("duration", patientState.duration)
        formdata.append("existing_diseases", patientState.existing_diseases)
        // formdata.append("date", "h")
        // navigate("/user/view")


        if (patientState.name == "" || patientState.gender == "" || patientState.duration == "") {
            alert("plese fill all fields")
        }
        else {
            // axios.post(`http://agaram.academy/api/action.php?request=${patientState.request}`, formdata).then((res) => {
            axios.post("https://retheesha.pythonanywhere.com/createpatientdetails", formdata, { headers }).then((res) => {
                console.log(res)
                dispatch(setPatient(res.data.data))
                localStorage.setItem("enquiry_id", res.data.data.id)
                navigate('/user/doctorapp')
            })

        }

    }
    const removeItem = (index) => {
        let diseasesList = patientState.diseases.filter((each, diseasesIndex) => index != diseasesIndex)
        console.log(diseasesList)
        dispatch(updateDiseases([...diseasesList]))
    }
    return (<>
        {/* <div className="add-product sidebar-collapse"> */}
        <Header />
        <div className="main">
            <div className="section " >

                <div className="container mt-5">
                    <h3 className="text-center title mb-0"><b>Patient Enquiry Form</b></h3>
                    <div>
                        <div className="row">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-group">
                                    <h6>Patient Name <span className="icon-danger">*</span></h6>
                                    <input type="text" className="form-control border-input" placeholder="Enter the name" onKeyUp={(e) => dispatch(setPatient({ ...patientState, name: e.target.value }))} />
                                </div>
                                <div className="col-md-12 col-sm-12 form-group my-5 ml-0 pl-0">
                                    <div className="card-big-shadow" style={{ maxWidth: "100%" }} >
                                        <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                            <div className="card-body">
                                                <h4 className="card-title">Enquiry For</h4>

                                                <div className="row">
                                                    <div className="form-group my-5 col-8" >
                                                        {/* <input className=" border-input form-control" type="text"   placeholder="KIND OF ILLNESS" onKeyUp={(e)=>setdiseases([...patientState.diseases,e.target.value])}
                                                                /><i className="fa fa-plus-square" aria-hidden="true" onClick={add}></i> */}
                                                        <div class="form-inline ml-auto">
                                                            <input class="form-control no-border" type="text" placeholder="KIND OF ILLNESS" onKeyUp={(e) => setdiseases(e.target.value)} />
                                                            <button type="button" className="btn btn-primary" onClick={add}><i className="fa fa-plus " aria-hidden="true" ></i></button>
                                                        </div>
                                                        {Array.isArray(diseasesarr) && diseasesarr.length > 0 ? diseasesarr.map((e, i) =>
                                                            <div className="row my-2">
                                                                <div className="col-2">
                                                                    <button type="button" className="btn btn-danger btn-link " onClick={() => removeItem(i)}>
                                                                        <i className="fa fa-times"></i>
                                                                    </button>

                                                                </div>
                                                                <div className="col-5 my-2 remove">{e}</div>
                                                            </div>
                                                        ) : ""}


                                                    </div>
                                                    <div className="form-group my-5 col-4">
                                                        <select className="form-select form-control" data-style="btn-info btn-round" aria-label="Default select example" onClick={(e) => dispatch(setPatient({ ...patientState, duration: e.target.value }))}>
                                                            <option disabled selected>Days of infection</option>
                                                            <option value="0-3">0-3 days</option>
                                                            <option value="4-5">4-5 days</option>
                                                            <option value="6-10">6-10 days</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="form-group">
                                                    <h4 className="card-category bg-info ">Existing Disease </h4>
                                                    <textarea className="form-control textarea-limited" placeholder="Please indicate if you have a history of any of the following diseases: diabetes, hypertension, asthma, etc" rows="13" maxlength="150" onKeyUp={(e) => dispatch(setPatient({ ...patientState, existing_diseases: e.target.value }))}></textarea>
                                                    <h5><small><span id="textarea-limited-message" className="pull-right">150 characters left</span></small></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <div className="row">
                                    <div className="col-sm-6 mt-5">
                                        <div className="form-group">

                                        </div>
                                    </div>
                                </div>



                                <h6 className="mt-5">Gender<span className="icon-danger">*</span></h6>
                                <div className="form-check-radio">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" onClick={(e) => dispatch(setPatient({ ...patientState, gender: e.target.value }))} />
                                        Male
                                        <span className="form-check-sign"></span>
                                    </label>
                                </div>
                                <div className="form-check-radio">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" onClick={(e) => dispatch(setPatient({ ...patientState, gender: e.target.value }))} />
                                        Female
                                        <span className="form-check-sign"></span>
                                    </label>
                                </div>

                                <div className="form-group my-5">
                                    <select className="form-select btn-outline-success p-2 w-50" data-style="btn-info btn-round" aria-label="Default select example" onClick={(e) => dispatch(setPatient({ ...patientState, blood_group: e.target.value }))}>
                                        <option disabled selected> Blood Group </option>
                                        <option value="A Positive">A Positive</option>
                                        <option value="A Negative">A Negative</option>
                                        <option value="B Positive">B Positive</option>
                                        <option value="B Negative">B Negative</option>
                                        <option value="O Positive">O Positive</option>
                                        <option value="O negative">O negative</option>
                                        <option value="AB Positive">AB Positive</option>
                                        <option value="AB negative">AB negative</option>


                                    </select>
                                </div>
                                <div className="form-group my-5">
                                    <h6 className="mt-5">Date of Birth<span className="icon-danger"></span></h6>

                                    <input className="form-control w-50 border-success" type="date" placeholder="Enter age" onChange={(e) => dispatch(setage(calculateAge(e.target.value)))}>
                                    </input>
                                    {/* dispatch(setPatient({ ...patientState, age: e.target.value }))} */}

                                </div>

                            </div>

                        </div>
                        <div className="row buttons-row">
                            <div className="col-md-6 col-sm-4">
                                <button className="btn btn-outline-danger btn-block btn-round" type="button" onClick={() => selftreatment()}>Self Treatment</button>
                            </div>
                            <div className="col-md-6 col-sm-4">
                                <button className="btn btn-outline-primary btn-block btn-round" type="button" onClick={() => doctorappointment()}>Doctor Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        {/* </div> */}

    </>)
}