import logo from './logo.svg';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import PageOne from './pages/PageOne';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //importing bootstrap

//Routes is from react-router-dom
//Routes will have a Route tag

function App() {
  return (
    <>   
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/page1" element={<PageOne />} />
      </Routes>
    </>
  );
}

export default App;
