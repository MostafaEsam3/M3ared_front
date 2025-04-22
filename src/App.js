import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route ,Routes} from "react-router-dom";

import AboutUs from './Pages/AboutUs/AboutUs.jsx';
import Terms from './Pages/Terms/Terms.jsx';
import Policy from './Pages/Policy/Policy.jsx';
import Modal from './Shared/Modal/Modal.jsx';
import DeleteModal from './Shared/Modal/DeleteModal.jsx';
import SuccessModal from './Shared/Modal/SuccessModal.jsx';
import AuthPage from './Pages/Auth/AuthPage.jsx';
import Verification from './Pages/Verification/Verification.jsx';
import Register from './Pages/Register/Register.jsx';
import TestModal from './Shared/Modal/TestDynamicModal.jsx';
import Profile from './Pages/ProfileImage/Profile.jsx';
import ServiceTabs from './Pages/UnderLine/UnderLine.jsx';
import LayoutComp from './Layout/Layout.jsx';
import ElectronicService from './Pages/ElectronicService/ElectronicService.jsx';
import NewsAboutUs from './Pages/NewsAboutUs/NewsAboutUs.jsx';
import ListOfEvents from './Pages/ListOfEvents/ListOfEvents.jsx';
import TypeOfEvents from './Pages/TypeOfEvents/TypeOfEvents.jsx';
import Faq from './Pages/Faq/Faq.jsx';
import Dashboard from './DashboardRendering.jsx';
import "../node_modules/platformscode-new-react/dist/style.css";

function App() {
  return (
    // <Router>
    <BrowserRouter>
    <Routes>
      {/* Layout + public routes */}
      <Route path="/*" element={<Dashboard />} />

      {/* Routes without layout */}
      <Route path="/auth" element={<Verification />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
