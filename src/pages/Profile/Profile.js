import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/slices/authSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Emial : {currentUser?.email}</h1>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};
