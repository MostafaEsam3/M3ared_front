import React from 'react'
import Success from "../../assets/Icon (2).svg";

export default function SuccessModal() {
    return (
        <>

            <div className="relative z-10" style={{ direction: "rtl" }} aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                            {/* first section */}
                            <div className="bg-red px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex justify-center items-center">
                                    <img src={Success} alt="Success icon" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16" />
                                </div>
                                <h1 className="text-xl font-bold mt-3 text-center"> تم اضافة البند بنجاح</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
