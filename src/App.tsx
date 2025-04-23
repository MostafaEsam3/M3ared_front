import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from './Pages/AboutUs/AboutUs';
import Terms from './Pages/Terms/Terms';
import Policy from './Pages/Policy/Policy';
import Modal from './Shared/Modal/Modal';
import DeleteModal from './Shared/Modal/DeleteModal';
import SuccessModal from './Shared/Modal/SuccessModal';
import AuthPage from './Pages/Auth/AuthPage';
import Verification from './Pages/Verification/Verification';
import TestModal from './Shared/Modal/TestDynamicModal';
import Profile from './Pages/ProfileImage/Profile';
import ServiceTabs from './Pages/UnderLine/UnderLine';
import LayoutComp from './Layout/Layout';
import ElectronicService from './Pages/ElectronicService/ElectronicService';
import NewsAboutUs from './Pages/NewsAboutUs/NewsAboutUs';
import ListOfEvents from './Pages/ListOfEvents/ListOfEvents';
import TypeOfEvents from './Pages/TypeOfEvents/TypeOfEvents';
import Faq from './Pages/Faq/Faq';
import Dashboard from './DashboardRendering';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
