import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed, Home, Login, Signup } from "pages";
import { GlobalStyles } from "custom-styled-component";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
