import React from 'react';
import ProfileImage from "./../../assets/Image.svg";
import Sequrity from "./../../assets/security-password.svg";

const BreedCrumb = ({
    breadcrumbItems,
    title,

}) => {
    return (
        <>
            <div className=" p-5 text-right bg-[#F3F4F6]" style={{ direction: "rtl" }}>
                <div className="head p-3 bg-[#FFFFFF] h-[130px] rounded-2xl  mt-2">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-2 space-x-reverse">
                            {breadcrumbItems.map((item, index) => (
                                <li key={index} className="inline-flex items-center">
                                    {index > 0 && (
                                        <svg
                                            className="rtl:rotate-90 w-3 h-3 text-gray-400 mx-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m5 9-4-4 4-4"
                                            />
                                        </svg>
                                    )}
                                    <a
                                        href={item.href}
                                        className={`text-sm font-medium ${index === breadcrumbItems.length - 1
                                            ? "text-[#9DA4AE]"
                                            : "text-[#384250]"
                                            } hover:text-[#384250]`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                    <h1 className="font-bold text-[#161616] text-3xl pt-5">{title}</h1>
                </div>
    

            <div className="  text-right rounded-lg" style={{ direction: "rtl" }}>
                <div className="head bg-gradient-to-r from-green-800 to-green-300 p-8 h-auto  rounded-lg  mt-5">
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4'>
                            <div className='bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center'>
                                <img src={ProfileImage} alt="icon" className='w-[60px] h-[60px]  ' />
                            </div>
                            <div className=''>
                                <h1 className="font-bold text-[#161616] mt-3 md:mt-0 text-2xl md:text-2xl ">إضافة سلالة جديدة</h1>
                                <p className='mt-0 md:mt-3 text-center md:text-start'>اخر ظهور 12:00:00</p>
                            </div>
                        </div>

                        <div>
                            <button className='flex items-center gap-2 bg-white text-black text-sm font-medium py-1.5 px-4 rounded-full hover:opacity-90 transition mt-3 md:mt-0'>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
//     </svg>
                                ارفع صوره
                            </button>
                        </div>


                    </div>
                </div>

                <div className='personal-info mt-5 grid grid-cols-12 gap-4  py-7 rounded-lg px-8 bg-[#FFFFFF]'>
                    <div className='col-span-12 md:col-span-7'>
                        <div className='border border-gray-300 rounded-lg px-3 py-7 shadow-md bg-[#FFFFFF] '>
                            <h1 className='text-2xl font-bold text-[#1F2A37]'>المعلومات الشخصية</h1>

                            <div className="inputs mt-3">
                                <div >
                                    <label className='text-[#1F2A37] font-bold'>البريد الالكتروني </label>
                                    <input type="text" className='border border-gray-300 rounded-2xl p-2 w-full mt-2 h-[40px] rounded-2xl' placeholder='اسم السلالة' />
                                </div>
                                <div >
                                    <label className='text-[#1F2A37] font-bold'>اسم المستخدم </label>
                                    <input type="text" className='border border-gray-300 rounded-2xl p-2 w-full mt-2 h-[40px] rounded-2xl' placeholder=' اسم المستخدم ' />
                                </div>
                                <div >
                                    <label className='text-[#1F2A37] font-bold'> رقم الهاتف </label>
                                    <input type="text" className='border border-gray-300 rounded-2xl p-2 w-full mt-2 h-[40px] rounded-2xl' placeholder='رقم الهاتف ' />
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-5 bg-[#FFFFFF] '>
                        <div className='border border-gray-300 rounded-lg p-5 shadow-md '>
                            <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center   bg-[#F3FCF6]">
                                <img src={Sequrity} alt="" className='w-[20.50px] h-[20.50px] ' />
                            </div>
                            <br />
                            <h1 className='text-2xl font-bold'>
                            تغيير كلمة المرور
                            </h1>
                                <button className='flex items-center gap-2 bg-[#1B8354] text-[#FFFFFF] text-base font-medium py-1.5 px-4 rounded-full hover:opacity-90 transition mt-3 md:mt-5 w-full justify-between flex-row-reverse'> 
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />    
                                </svg>
                                تغيير كلمة المرور
                                </button>
                        </div>
                    </div>

                </div>

                <div className='flex items-center mt-5 gap-4'>
                    <button className='bg-[#0D121C] text-white rounded-3xl px-7 py-2  mt-2 '>حفظ</button>
                    <button className='bg-[#D2D6DB] text-[#161616] rounded-3xl px-7 py-2   mt-2 '>إعادة تعيين</button>

                </div>
                <div className=" mt-12 pb-5">
                    <h1 className=" text-[#161616] font-bold text-sm">
                        جميع الحقوق محفوظة للهيئة العامة للمعارض والمؤتمرات © 2025
                    </h1>
                </div>
            </div>
            </div>
        </>
    );
}

export default BreedCrumb;



// {/* <div className="flex justify-between items-center bg-gradient-to-r from-green-800 to-green-300 p-4 rounded-md shadow-md text-white w-full max-w-3xl mx-auto">
// {/* Upload Button */}
// <button className="flex items-center gap-2 bg-white text-black text-sm font-medium py-1.5 px-4 rounded-full hover:opacity-90 transition">
//     <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
//     </svg>
//     رفع صورة
// </button>

// {/* User Info */}
// <div className="flex items-center gap-3 ">
//     <div>
//         <p className="font-semibold text-white">عبدالعزيز محمد</p>
//         <p className="text-sm text-white/80">آخر ظهور 12:00:00</p>
//     </div>
//     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-8 h-8 text-black" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 14a3 3 0 01-6 0m6 0a3 3 0 00-6 0m9-4a3 3 0 11-6 0 3 3 0 016 0zm-9 0a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//     </div>
// </div>
// </div> */}