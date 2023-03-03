import React, { useEffect } from "react";
import { deleteuser, getusers } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./home.scss"
const Home = () => {
  const dispatch = useDispatch();
  const { loading, message, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  console.log(user);
  
  const deletehandle= (id)=>{
    dispatch(deleteuser(id));
    window.location.reload();
  }
  return (
    <div className="home">
      <div className="table-up">
        <span>serial no.</span>
        <span>Name</span>
        <span>contact no</span>
        <span>email</span>
        <span>address</span>
        <span>pincode</span>
      </div>
      {user?.map((user, index) => (
        <div className="data"> 
          <div className="user">{index + 1}</div>
          <div className="user">{user.name}</div>
          <div className="user">{user.contact_no}</div>
          <div className="user">{user.contact_email}</div>
          <div className="user">{user.address}</div>
          <div className="user">{user.pincode}</div>
          <button onClick={()=>deletehandle(user.id)}>delte</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
