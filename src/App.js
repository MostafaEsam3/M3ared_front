import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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


function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with layout */}
        <Route element={<LayoutComp />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/delete-modal" element={<DeleteModal />} />
          <Route path="/success-modal" element={<SuccessModal />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/register" element={<Register />} />
          <Route path="/testModal" element={<TestModal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/serviceTabs" element={<ServiceTabs />} />
          <Route path="/electronicService" element={<ElectronicService />} />
          <Route path="/news-about-us" element={<NewsAboutUs />} />
          <Route path="/list-events" element={<ListOfEvents />} />
          <Route path="/type-event" element={<TypeOfEvents />} />
          <Route path="/faq" element={<Faq />} />


          
          
          
        </Route>

        {/* Routes without layout */}
        <Route path="/auth" element={<Verification />} />
        <Route path="/auth/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
