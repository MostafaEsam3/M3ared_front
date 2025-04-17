import React from 'react';
import xImage from "../../assets/Icon.svg";
const Modal = () => {
    return (
        <>
            <div className="relative z-10" style={{ direction: "rtl" }} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                            {/* first section */}
                            <div className="bg-red px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex  flex-row-reverse">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-5 sm:w-5">
                                        <img src={xImage} alt="x" />
                                    </div>
                                </div>
                                <h1 className="text-xl font-bold"> أضافة بند جديد</h1>
                                <div className="container-input mt-2">
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-12 md:col-span-6">
                                            <label className="font-normal text-sm"> عنوان البند باللغة العربيه</label>
                                            <input type="text" className="border border-gray-300 rounded-3xl p-2 w-full mt-2 h-[40px] rounded-[1.375rem]"
                                                placeholder="عنوان البند باللغة العربيه " />
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label className="font-normal text-sm">عنوان البند باللغة الانجليزية </label>
                                            <input type="text" className="border border-gray-300 rounded-3xl p-2 w-full mt-2 h-[40px] rounded-[1.375rem]" placeholder="عنوان البند باللغة الانجليزية" />
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label className="font-normal text-sm"> وصف البند باللغة العربية</label>
                                            <textarea type="text" rows="4" className="border border-[#9DA4AE] rounded-lg p-2 w-full mt-2  rounded-[1.375rem]" placeholder="رقم البند" ></textarea>
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label className="font-normal text-sm"> وصف البند باللغة الانجليزية</label>
                                            <textarea type="text" rows="4" className="border border-[#9DA4AE] border-gray-300 rounded-lg p-2 w-full mt-2  rounded-[1.375rem]" placeholder="رقم البند" ></textarea>
                                        </div>
                                    </div>
                                </div>
                                {/* buttons */}
                                <div class="bg-gray-50 sm:flex sm:flex-row-reverse gap-2 mt-4">
                                    <button type="button" class="inline-flex w-full justify-center rounded-3xl bg-[#1B8354] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500  sm:w-auto m-0">تعديل</button>
                                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-3xl bg-[#F3F4F6] px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto m-0">الغاء</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Modal;
