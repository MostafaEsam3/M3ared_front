import React from 'react';
import BreedCrumb from '../../Shared/BreedCrumb/BreedCrumb';

const Profile = () => {
    const breadcrumbItems = [
        { label: "لوحة التحكم", href: "#" },
        { label: "الملف الشخصي", href: "#" },
      ];
    return (
      <>

<BreedCrumb  breadcrumbItems={breadcrumbItems} title={"الملف الشخصي"}/>

      
      </>
    );
}

export default Profile;
