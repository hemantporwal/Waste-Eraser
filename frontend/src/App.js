import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Navbar from './components/Navbar';
import Map from './pages/Map/Map';
import Home from './pages/Home/Home';
import Alert from './components/Alert';

function App() {
  const act = process.env.REACT_MAP_KEY;
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        {/* <div className=""><Navbar></Navbar></div>
        {alert && <Alert alert={alert}></Alert>} */}
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/map" element={<Map act = {act} showAlert = {showAlert}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
