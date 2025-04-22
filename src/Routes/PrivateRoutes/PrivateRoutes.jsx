import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Terms from '../../Pages/Terms/Terms';
import Policy from '../../Pages/Policy/Policy';
import Modal from '../../Shared/Modal/Modal';
import DeleteModal from '../../Shared/Modal/DeleteModal';
import SuccessModal from '../../Shared/Modal/SuccessModal';
import Verification from '../../Pages/Verification/Verification';
import Register from '../../Pages/Register/Register';
import TestModal from '../../Shared/Modal/TestDynamicModal';
import Profile from '../../Pages/ProfileImage/Profile';
import ServiceTabs from '../../Pages/UnderLine/UnderLine';
import ElectronicService from '../../Pages/ElectronicService/ElectronicService';
import NewsAboutUs from '../../Pages/NewsAboutUs/NewsAboutUs';
import ListOfEvents from '../../Pages/ListOfEvents/ListOfEvents';
import TypeOfEvents from '../../Pages/TypeOfEvents/TypeOfEvents';
import Faq from '../../Pages/Faq/Faq';



// Public routes with layout
export const publicRoutesWithLayout = [
  {
    path: '/',
    name: 'about us',
    component: AboutUs,
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms,
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy,
  },
  {
    path: '/modal',
    name: 'modal',
    component: Modal,
  },
  {
    path: '/delete-modal',
    name: 'delete modal',
    component: DeleteModal,
  },
  {
    path: '/success-modal',
    name: 'success modal',
    component: SuccessModal,
  },
  {
    path: '/verification',
    name: 'verification',
    component: Verification,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/testModal',
    name: 'test modal',
    component: TestModal,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/serviceTabs',
    name: 'service tabs',
    component: ServiceTabs,
  },
  {
    path: '/electronicService',
    name: 'electronic service',
    component: ElectronicService,
  },
  {
    path: '/news-about-us',
    name: 'news about us',
    component: NewsAboutUs,
  },
  {
    path: '/list-events',
    name: 'list of events',
    component: ListOfEvents,
  },
  {
    path: '/type-event',
    name: 'type of events',
    component: TypeOfEvents,
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
];

// Public routes without layout
export const publicRoutesWithoutLayout = [
  {
    path: '/auth',
    name: 'auth',
    component: Verification,
  },
  {
    path: '/auth/register',
    name: 'auth register',
    component: Register,
  },
];

// Example: Role-based access control (replace with your Amongst logic)
const getUserRole = () => {
  return 'admin'; 
};

// ProtectedRoute component for role-based access
const ProtectedRoute = ({ component: Component, roles }) => {
  const userRole = getUserRole();
  if (!roles.includes(userRole)) {
    return <div>Unauthorized Access</div>; // Replace with any error page we need
  }
  return <Component />;
};


