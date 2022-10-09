import { useDispatch, useSelector } from "react-redux";
import { clearError, logout } from "redux/slices/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser,  error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // if(!currentUser){
    //   return navigate("/");
    // }
    
    if (error) {
      toast.error(error)
      return dispatch(clearError());
    };
    
  },[error,  currentUser])
  
  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout successfull 😉");
  };
  

  return (
    <div>
      <h1>Emial : {currentUser?.email}</h1>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};
