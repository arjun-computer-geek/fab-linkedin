import GlobalStyle from "./components/styled-component/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
