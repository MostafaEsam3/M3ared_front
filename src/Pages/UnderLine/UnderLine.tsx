import React, { useState } from 'react';

const ServiceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('steps');

  return (
    <div className="border-b border-gray-200 p-7" style={{ direction: 'rtl' }}>
      <div className="flex text-right gap-8 text-sm font-medium">
        <button
          onClick={() => setActiveTab('info')}
          className={`pb-2 ${
            activeTab === 'info'
              ? 'border-b-2 border-green-600 text-black font-bold'
              : 'text-gray-500'
          }`}
        >
          بيانات الخدمة
        </button>
        <button
          onClick={() => setActiveTab('steps')}
          className={`pb-2 ${
            activeTab === 'steps'
              ? 'border-b-2 border-green-600 text-black font-bold'
              : 'text-gray-500'
          }`}
        >
          خطوات الخدمة
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'info' && <div>محتوى بيانات الخدمة</div>}
        {activeTab === 'steps' && <div>محتوى خطوات الخدمة</div>}
      </div>
    </div>
  );
};

export default ServiceTabs;
