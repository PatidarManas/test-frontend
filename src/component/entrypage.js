import React, { useEffect, useState } from 'react'
import { enteruser, getusers } from '../redux/action'
import {useDispatch,useSelector} from "react-redux"
import validator from 'validator'

import "./entrypage.scss"
const Entry = () => {
    const [ename,setename] = useState();
    const [econtact,setecontact] = useState();
    const [eemail,seteemail] = useState();
    const [eaddress,seteaddress] = useState();
    const [epincode,setepincode] = useState();
  const dispatch = useDispatch();
  const {loading,message,user2} = useSelector(
    (state)=>state.user
  )
//   useEffect(()=>{
//     dispatch(enteruser(ename,esurname))
//   },[dispatch])
  const submitHandler = e =>{
    e.preventDefault();
    
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    if(!ename || !eaddress || !econtact || !epincode || !econtact || eemail?!validator.isEmail(eemail):false){
      document.getElementById("hidden").style.display="block";
    }
    else{
      dispatch(enteruser(ename,econtact,eemail,epincode,eaddress))
      window.location.reload()

    }
    // const myform = new FormData();
    // myform.append("name",ename)
    // myform.append("surname",esurname)
  }
  return (
    <>
    <form onSubmit={submitHandler} >
       <div> <text>Name:</text>
        <input placeholder='xyz' onChange={e => setename(e.target.value)}></input></div>
        <div><text>Mobile no.:</text>
        <input placeholder='987xxxxx83' onChange={e => setecontact(e.target.value)}></input></div>
        <div> <text>Email address<h2>&#40;optional&#41;</h2>:</text>
        <input placeholder='abcd@xyz.com' onChange={e => seteemail(e.target.value)}></input></div>
        <div> <text>Address:</text>
        <input placeholder='241,colony,city' onChange={e => seteaddress(e.target.value)}></input></div>
        <div><text>Pincode:</text>
        <input placeholder='451xxx' onChange={e => setepincode(e.target.value)}></input></div>
        <div className='submit-action'><text id="hidden">Please enter all fields correctly</text>
        <button type='submit' >submit</button></div>
    </form>
    </>
  )}

  export default Entry;