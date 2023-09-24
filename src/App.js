import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import FacilityScreen from './screens/FacilityScreen';
import RewardScreen from './screens/RewardScreen';
// import CenterAdminPanel from './screens/CenterAdminPanel';
import Error from './screens/Error';
import Login from './backendComponents/Login';
import Signup from './backendComponents/Signup';
import ForgotPassword from './backendComponents/ForgotPassword';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/home" element={<HomeScreen/>}></Route>
          <Route path="/facility" element={<FacilityScreen />}></Route>
          <Route path="/rewards" element={<RewardScreen />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          {/* <Route path="/admin" element={<CenterAdminPanel />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          {/* <Route path="/*" element={<Error />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
