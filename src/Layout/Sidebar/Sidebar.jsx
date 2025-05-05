import React from 'react';
import { useState } from 'react';
import {
  FiGrid,
  FiFile,
  FiMessageSquare,
  FiPhone,
  FiChevronDown,
  FiChevronUp,
  FiSettings,
  FiUsers,
  FiInfo,
  FiMail,
  FiLogOut
} from 'react-icons/fi';
import SuidiImage from './../../assets/Nav Drawer Header (1).svg';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onItemClick }) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 'electronic-services',
      title: 'الخدمات الإلكترونية',
      icon: <FiGrid />,
      isExpanded: true,
      Link: '/electronicService',
    },
    {
      id: 'events',
      title: 'الفعاليات',
      icon: <FiFile />,
      isExpanded: true,
      subItems: [
        { id: 'events-types', title: 'أنواع الفعاليات', Link: '/type-event' },
        { id: 'events-list', title: 'قائمة الفعاليات', Link: '/list-events' },
      ]
    },
    {
      id: 'applications',
      title: 'التطبيقات',
      icon: <FiGrid/>,
      isExpanded: true,
      subItems: [
        { id: 'app-types', title: 'أنواع التطبيقات', },
        { id: 'app-list', title: 'قائمة التطبيقات' },
      ]
    },
    {
      id: 'media-center',
      title: 'المركز الإعلامي',
      icon: <FiMessageSquare />,
      isExpanded: false,
      subItems: [
        { id: 'news', title: 'الأخبار', Link: '/news-about-us' },
      ]
    },
    {
      id: 'employment',
      title: 'التوظيف',
      icon: <FiUsers />,
      isExpanded: false,
      subItems: [
        {
          id: 'vacant-jobs', title: 'الملف الشخصي', Link: '/profile' },
        { id: 'cv-list', title: 'قائمة السيرة الذاتية' },
        { id: 'faq', title: 'قائمة الاسئلة الشائعة', Link: '/faq' },
      ]
    },
    {
      id: 'usage-policy',
      title: 'سياسة الاستخدام',
      icon: <FiSettings />,
      isExpanded: false,
      subItems: [
        { id: 'terms', title: 'الشروط و الأحكام', Link: '/terms' },
        { id: 'privacy', title: 'سياسة الخصوصية' },
      ]
    },
    {
      id: 'help-center',
      title: 'مركز الدعم و المساعدة',
      icon: <FiInfo />,
      isExpanded: false,
      subItems: [
        { id: 'contact-us', title: 'تواصل معنا' },
        { id: 'faq', title: 'الأسئلة' },
        { id: 'messages', title: 'قائمة عناوين الرسائل', count: 199 },
        { id: 'contact-messages', title: 'رسائل اتصل بنا', count: 99 },
      ]
    },
    {
      id: 'mail-subscriptions',
      title: 'البريد و الاشتراكات',
      icon: <FiMail />,
      isExpanded: false,
      subItems: [
        { id: 'mailing-list', title: 'القائمة البريدية' },
        { id: 'newsletter-subscribers', title: 'مشتركي النشرة البريدية', count: 77 },
      ]
    },
    {
      id: 'about',
      title: 'عن الهيئة',
      icon: <FiPhone />,
      isExpanded: false,
      Link: '/',
    },
    {
      id: 'authentication',
      title: 'تسجيل الخروج',
      icon: <FiLogOut/>,
      isExpanded: false,
      Link: '/auth/register',
      className: 'bg-red-800',
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const toggleExpand = (id) => {
    setMenuItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, isExpanded: !item.isExpanded }
          : item
      )
    );
  };

  const handleItemClick = (id) => {
    setSelectedItem(id);
    if (onItemClick) onItemClick(id);
  };

  if (!isOpen) {
    return (
      <div className="w-16 bg-[#074D31] text-white transition-all duration-300 ease-in-out ">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="py-3 px-4 flex justify-center hover:bg-[#0a5f3f] cursor-pointer transition-colors duration-200 border radius-lg"
            onClick={() => handleItemClick(item.id)}
          >
            <span className="text-xl">{item.icon}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="w-64  bg-[#074D31] text-white transition-all duration-300 ease-in-out fixed top-0 start-0 h-screen overflow-auto hide-scrollbar" style={{fontSize:"17px"}}>
        <div>
          <img src={SuidiImage} alt="Logo" className=" mx-auto " />
        </div>
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className={`py-3 px-4 flex items-center justify-between hover:bg-[#0a5f3f] cursor-pointer transition-colors duration-200 ${selectedItem === item.id ? 'bg-[#0a5f3f]' : ''
                }`}
              onClick={() => {
                handleItemClick(item.id);
                if (item.subItems) toggleExpand(item.id);
              }}
            >
              <div className="flex items-center">
                <Link to={item.Link} className="flex items-center justify-between w-full">
                  <span className="text-xl ml-3">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </div>
              {item.subItems && (
                <span className="transition-transform duration-200">
                  {item.isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              )}
            </div>

            {item.subItems && item.isExpanded && (
              <div className="bg-[#063f27] overflow-hidden">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`py-2 px-4 pr-12 flex items-center justify-between hover:bg-[#FFFFFF4D] hover:border-none hover:rounded-2xl cursor-pointer transition-colors duration-200 animate-slideIn ${selectedItem === subItem.id ? 'bg-[#FFFFFF4D] border border-none rounded-2xl' : ''
                      }`}
                    onClick={() => handleItemClick(subItem.id)}
                    style={{ fontSize: '15px' }} // Adjust padding for sub-items
                  >
                    <Link to={subItem.Link} className="flex items-center justify-between w-full">
                      <span>{subItem.title}</span>
                      {subItem.count && (
                        <span className="bg-white text-[#074D31] rounded-full text-xs px-2 py-0.5">
                          {subItem.count}
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <style>
          {`
          @keyframes slideIn {
            from {
              opacity: 1;
              transform: translateY(-10px);
           
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideIn {
            animation: slideIn 0.2s ease-out forwards;
          }
        `}
        </style>
      </div>
    </>

  );
};

export default Sidebar;