import axios from "axios";

export const getusers = () => async (dispatch) => {
  try {
    dispatch({ type: "userRequest" });

    const {data} = await axios.get(
      "http://localhost:5000/user/users",
      {},
      {
        headers: {
          "Content-type": "aplication/json",
        },
      },
      { withCredentials: false }
    );
    
    dispatch({type:"userSuccess",payload:data})
  } catch (error) {
    dispatch({type:"userFail",payload:error.message})
  }}
export const enteruser = (ename,econtact,eemail,epincode,eaddress) => async (dispatch) => {
  try {
    dispatch({ type: "createRequest" });

    const {data} = await axios.post
    (
      "http://localhost:5000/user/new",
      {
        body:{
        name:ename,
        contact_no:econtact,
        contact_email:eemail,
        address:eaddress,
        pincode:epincode,
      },
      
        headers: {
          'Content-Type': 'aplication/json',
        },
      },
      { withCredentials: false }
    );
    // console.log(name)
    dispatch({type:"createSuccess",payload:data})
  } catch (error) {
    dispatch({type:"createFail",payload:"error.message"})
  }}
export const deleteuser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteRequest" });

    const {data} = await axios.delete
    (
      `http://localhost:5000/user/${id}`,{},
      {
        headers: {
          'Content-Type': 'aplication/json',
        },
      },
      { withCredentials: false }
    );
    // console.log(name)
    dispatch({type:"deleteSuccess",payload:data})
  } catch (error) {
    dispatch({type:"deleteFail",payload:"error.message"})
  }
}