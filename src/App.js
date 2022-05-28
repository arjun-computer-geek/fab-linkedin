import GlobalStyle from "./components/styled-component/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Feed from "./pages/feed/Feed";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
