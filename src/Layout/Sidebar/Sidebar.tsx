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
  FiMail
} from 'react-icons/fi';
import SuidiImage from './../../assets/saudi-emblem.png';
import { Link } from 'react-router-dom';

const Sidebar: any = ({ isOpen, onItemClick }: any) => {
  const [menuItems, setMenuItems]: any = useState([
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
          { id: 'events-list', title: 'قائمة الفعاليات' , Link: '/list-events' },
        ]
      },
    {
      id: 'applications',
      title: 'التطبيقات',
      icon: <FiFile />,
      isExpanded: true,
      subItems: [
        { id: 'app-types', title: 'أنواع التطبيقات' },
        { id: 'app-list', title: 'قائمة التطبيقات' },
      ]
    },
    {
      id: 'media-center',
      title: 'المركز الإعلامي',
      icon: <FiMessageSquare />,
      isExpanded: false,
      subItems: [
        { id: 'news', title: 'الأخبار' , Link: '/news-about-us' },
      ]
    },
    {
      id: 'employment',
      title: 'التوظيف',
      icon: <FiUsers />,
      isExpanded: false,
      subItems: [
        { id: 'vacant-jobs', title: 'الوظائف الشاغرة' ,Link: '/profile'},
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
  ]);

  const toggleExpand: any = (id: any) => {
    setMenuItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === id
          ? { ...item, isExpanded: !item.isExpanded }
          : item
      )
    );
  };

  if (!isOpen) {
    return (
      <div className="w-16 bg-[#074D31] text-white transition-all duration-300">
      
        {menuItems.map((item: any) => (
          <div key={item.id} className="py-3 px-4 flex justify-center hover:bg-hover-green cursor-pointer">
            <span className="text-xl">{item.icon}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-64 bg-[#074D31] text-white transition-all duration-300" style={{ direction: 'rtl' }}>
        {/* <div>
          <img
            src={SuidiImage}
            alt="شعار المملكة العربية السعودية"
            className="h-10 w-full "
          />
        </div> */}
      {menuItems.map((item: any) => (
        <div key={item.id}>
          <div
            className="py-3 px-4 flex items-center justify-between hover:bg-hover-green cursor-pointer"
            onClick={() => item.subItems && toggleExpand(item.id)}
          >
            <div className="flex items-center">
            <Link to={item.Link} className="flex items-center justify-between w-full">
              <span className="text-xl ml-3">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
            </div>
            {item.subItems && (
              <span>
                {item.isExpanded ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            )}
          </div>

          {item.subItems && item.isExpanded && (
            <div className="bg-dark-green">
              {item.subItems.map((subItem: any) => (
                <div
                  key={subItem.id}
                  className="py-2 px-4 pr-12 flex items-center justify-between hover:bg-hover-green cursor-pointer"
                >
                    <Link to={subItem.Link} className="flex items-center justify-between w-full">
                   
                  <span>{subItem.title}</span>
                  {subItem.count && (
                    <span className="bg-white text-primary-green rounded-full text-xs px-2 py-0.5">
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
    </div>
  );
};

export default Sidebar;