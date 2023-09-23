import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import FacilityScreen from './screens/FacilityScreen';
import RewardScreen from './screens/RewardScreen';
function App() {
  return (
    <>
    {/* <HomeScreen/> */}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/home" element={<HomeScreen/>}></Route>
          <Route path="/facility" element={<FacilityScreen />}></Route>
          <Route path="/rewards" element={<RewardScreen />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          {/* <Route path="/*" element={<Error />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
