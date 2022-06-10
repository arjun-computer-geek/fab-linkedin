import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, Home, Login, Profile, Signup } from "pages";
import { GlobalStyles } from "custom-styled-component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "utils";
import { setCurrentUser } from "redux/slices/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>
      dispatch(
        setCurrentUser({
          displayName: user?.displayName,
          email: user?.email,
          emailVerified: user?.emailVerified,
          phoneNumber: user?.phoneNumber,
          photoUrl: user?.photoURL,
        })
      )
    );
    return unsubscribe;
  });
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
