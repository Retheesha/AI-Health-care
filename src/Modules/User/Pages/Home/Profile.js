import { Link, useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { register_details } from "../../slices/RegisterSlice"
import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useState } from "react"
import axios from "axios"
export const Profile = () => {
    const userLoginvalue=useSelector((state)=>state.userlogin).logindetails
    const userStatevalue=useSelector((state)=>state.userRegister).registerData
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const[newEdit,setNewEdit]=useState(true)
    console.log(newEdit)
    const edit = () => {
        setNewEdit(false)
    //     const formdata=new FormData();
    //    formdata.append("request",userStatevalue.request)
    //    formdata.append("name",userStatevalue.name)
    //    formdata.append("email",userStatevalue.email)
    //    formdata.append("password",userStatevalue.password)
    //    formdata.append("aadhar",userStatevalue.aadhar)
    //    formdata.append("address",userStatevalue.address)
    //    formdata.append("phone",userStatevalue.phone)
    //    formdata.append("city",userStatevalue.city)
    //    formdata.append("area",userStatevalue.area)
    //    formdata.append("pin",userStatevalue.pin)
    //     axios.post(`http://agaram.academy/api/action.php?request=${userStatevalue.request}`,formdata).then((res)=>{

    //         console.log(res)
    //     })
        
    }
    
    return (<>
       <Header/>
      
  <div className="wrapper">
    <div className="profile-content section">
      <div className="container mt-5">
        <div className="row">
          <div className="profile-picture">
            <div className="fileinput fileinput-new" data-provides="fileinput">
              <div className="fileinput-new img-no-padding">
                <img src="../../assets/img/user/png-transparent-user.png" alt="..."/>
              </div>
              <div className="name">
                <h4 className="title text-center text-dark">{userLoginvalue.name}<br /><small></small></h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto text-center">
            <div className="row">
                <h6 className="col-4">Email:</h6>
                {newEdit?<h6 className="col-6 text-start">{userLoginvalue.email}</h6>:<input className="form-control w-50" placeholder={userLoginvalue.email}/>}
                
            </div>
            <br />
            <div className="row">
                <h6 className="col-4">Phone No:</h6>
                {newEdit?<h6 className="col-6 text-start">{userLoginvalue.phone}</h6>:<input className="form-control w-50" placeholder={userLoginvalue.phone}/>}
            </div>
            <button className="btn btn-outline-default btn-round mt-3" onClick={()=>edit()}><i className="fa fa-pencil-square-o"></i> Edit</button>
            <button className="btn btn-outline-default btn-round mt-3 mx-2" ><i className="fa fa-pencil-square-o"></i> Update</button>

          </div>
        </div>
        <br />
        
       
        
      </div>
    </div>
  </div>
  <Footer/>
          
                    {/* <h3 className="card-title text-center">Edit profile</h3> */}
                    {/* <div className="division">
                        <div className="line l"></div>
                        <span>or</span>
                        <div className="line r"></div>
                    </div> */}
                    {/* <div className="register-form">
                        <input type="text" className="form-control" placeholder="Name" value={userLoginvalue.name} onChange={(e)=>dispatch(register_details({...userStatevalue,name:e.target.value}))}/>
                        <input type="text" className="form-control" placeholder="Email" onKeyUp={(e)=>dispatch(register_details({...userStatevalue,email:e.target.value}))}/>
                        <input type="password" className="form-control" placeholder="Contact No" onKeyUp={(e)=>dispatch(register_details({...userStatevalue,phone:e.target.value}))}/>
                        <input type="password" className="form-control" placeholder="Create Password" onKeyUp={(e)=>dispatch(register_details({...userStatevalue,password:e.target.value}))}/>
                        <button className="btn btn-block btn-round" onClick={() => edit()}>Update </button>
                    </div> */}
                    
               
                {/* </div> */}
            
        </>)
}