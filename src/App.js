import GlobalStyle from "./components/styled-component/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Login from "./components/login/Login";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
