import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importing bootstrap

//Routes is from react-router-dom
//Routes will have a Route tag

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
