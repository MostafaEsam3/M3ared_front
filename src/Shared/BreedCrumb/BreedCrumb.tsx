// BreedCrumb.tsx
import React from 'react';
import ProfileImage from "./../../assets/Image.svg";
import Sequrity from "./../../assets/security-password.svg";
import arrow from "../../assets/arrow-left.svg";
import arrowDownlowd from "../../assets/AROWDOWNLOWD.svg";
import arrowPassword from "../../assets/profileicorarrow.svg";

const BreedCrumb = ({
    breadcrumbItems,
    title,
}: any) => {
    return (
        <>
            <div className=" p-5 text-right bg-[#F3F4F6]" >
                <div className="head p-6 bg-white rounded-lg ">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-2 space-x-reverse">
                            {breadcrumbItems.map((item: any, index: any) => (
                                <li key={index} className="inline-flex items-center">
                                    {index > 0 && (
                                        <img src={arrow} alt="" />

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
                    <h1 className="font-bold text-[#161616] text-3xl pt-5">{"الملف الشخصي"}</h1>
                </div>

                <div className=" bg-[#FFFFFF] py-3 px-6 mt-6 rounded-2xl text-right " style={{ direction: "rtl" }}>
                    <div>

{/* IMAGE BACKGROUND  */}
                        <div className="head tree  p-8 h-auto  rounded-lg  mt-5">
                            <div className='flex flex-col md:flex-row items-center justify-between'>
                                <div className='flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4'>
                                    <div className='bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center'>
                                        <img src={ProfileImage} alt="icon" className='w-[60px] h-[60px]  ' />
                                    </div>
                                    <div className=''>
                                        <h1 className="font-bold text-[#FFFFFF] mt-3 md:mt-0 text-2xl md:text-2xl ">عبدالعزيز محمد</h1>
                                        <p className='mt-0 md:mt-3 text-center md:text-start  text-[#FFFFFF]'>اخر ظهور 12:00:00</p>
                                    </div>
                                </div>

                                <div>
                                    <button className='flex items-center gap-2 bg-white text-black text-sm font-bold py-1.5 px-4 rounded-full hover:opacity-90 transition mt-3 md:mt-0 '>
                                      <img src={arrowDownlowd} alt="" />
رفع صورة                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='personal-info mt-5 grid grid-cols-12 gap-4  py-7 rounded-lg bg-[#FFFFFF]'>
                            <div className='col-span-12 md:col-span-7'>
                                <div className='border border-gray-300 rounded-lg px-3 py-7 shadow-md bg-[#FFFFFF] '>
                                    <h1 className='text-2xl font-bold text-[#1F2A37]'>المعلومات الشخصية</h1>

                                    <div className="inputs mt-5">
                                        <div>
                                            <label className='text-[#1F2A37] font-[#161616] text-[14px]'>البريد الالكتروني </label>
                                            <input type="text" className='border border-[#9DA4AE] rounded-2xl p-2 w-full mt-2 h-[40px] rounded-2xl' placeholder='اسم السلالة' />
                                        </div>
                                        <div className='mt-5'>
                                            <label className='text-[#1F2A37] font-[#161616] text-[14px]'>اسم المستخدم </label>
                                            <input type="text" className='border border-[#9DA4AE] rounded-2xl p-2 w-full mt-2 h-[40px] ' placeholder=' اسم المستخدم ' />
                                        </div>
                                        <div className='mt-5'>
                                            <label className='text-[#1F2A37] font-[#161616] text-[14px]'> رقم الهاتف </label>
                                            <input type="text" className='border border-[#9DA4AE] rounded-2xl p-2 w-full mt-2 h-[40px] rounded-2xl' placeholder='رقم الهاتف ' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-12 md:col-span-5 bg-[#FFFFFF] '>
                                <div className='border border-gray-300 rounded-lg p-5 shadow-md '>
                                    <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center bg-[#F3FCF6]">
                                        <img src={Sequrity} alt="" className='w-[20.50px] h-[20.50px] ' />
                                    </div>
                                    <br />
                                    <h1 className='text-2xl font-bold'>تغيير كلمة المرور</h1>
                                    <button className='flex items-center gap-2 bg-[#1B8354] text-[#FFFFFF] text-base font-medium py-1.5 px-4 rounded-full hover:opacity-90 transition mt-3 md:mt-5 w-full justify-between flex-row-reverse'>
                                    <img src={arrowPassword} alt="" />
                                        تغيير كلمة المرور
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    <div className='flex items-center mt-5 gap-4 py-5 rounded-lg bg-[#FFFFFF] px-4'>
                        <button className='bg-[#0D121C] text-white rounded-3xl px-7 py-2  mt-2 '>حفظ</button>
                        <button className='bg-[#D2D6DB] text-[#161616] rounded-3xl px-7 py-2   mt-2 '>إعادة تعيين</button>
                    </div>

                    <div className=" mt-16 pb-5">
                        <h1 className=" text-[#161616] font-bold text-sm">
                            جميع الحقوق محفوظة للهيئة العامة للمعارض والمؤتمرات © 2025
                        </h1>
                    </div>
            </div>
        </>
    );
};

export default BreedCrumb;
