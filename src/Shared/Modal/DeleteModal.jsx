import React from 'react'
import DELETE from "../../assets/Icon (1).svg";
import xImage from "../../assets/Icon.svg";
export default function DeleteModal() {
    return (
        <>
            <div className="relative z-10" style={{ direction: "rtl" }} aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                            {/* first section */}
                            <div className="bg-red px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <img src={DELETE} alt="" />
                                    </div>
                                    <div className=" flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:h-5 sm:w-5">
                                        <img src={xImage} alt="x" />
                                    </div>

                                </div>
                                <h1 className="text-xl font-bold mt-2"> هل انت متأكد من حذف هذا البند</h1>
                                <div class=" sm:flex sm:flex-row-reverse gap-2 mt-4">
                            <button type="button" class="inline-flex w-full justify-center rounded-3xl bg-[#D92D20] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500  sm:w-auto m-0">نعم</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-3xl bg-[#F3F4F6] px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto m-0">الغاء</button>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
