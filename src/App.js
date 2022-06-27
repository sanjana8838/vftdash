import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";

import Analytics from "./pages/Analytics";
import BatteryHealth from "./pages/BatteryHealth";
import Dashboard from "./pages/Dashboard";
import ElectricalSection from "./pages/ElectricalSection";
import ElectricalSection2 from "./pages/ElectricalSection2";
import Logdata from "./pages/Logdata";
import Setting from "./pages/Setting";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/batteryhealth" element={<BatteryHealth />} />
          <Route path="/electricalsection" element={<ElectricalSection />} />
          <Route path="/electricalsection2" element={<ElectricalSection2 />} />          
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/logs" element={<Logdata />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
