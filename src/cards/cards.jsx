import React from 'react';
import myimage from "./../assets/avatar.svg"

const Cards = () => {

    return (
        <>
            {/* xs:bg-red-900  xs:max-w-sm sm:max-w-sm md:max-w-[50%]"> */}
            {/* max width to screen will take 600  */}

            {/* <div className=' mo gap-x-6 flex flex-col sm:flex-col   md:flex-row p-6 divide-y divide-yellow-300'>
                <div className="mt-10 flex  items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-red-700/15 
               dark:bg-slate-800 dark:shadow-none dark:outline-gray-600 
               xs:bg-red-900  xs:max-w-sm sm:max-w-full md:w-96">
                    <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
                     <div>
                        <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
                        <div className='bg-black' style={{ width: "100%", overflow: "hidden", backgroundColor: "red" }}>
                            <p class="text-gray-500  dark:text-gray-400 ">You have a new message!</p>
                        </div>
                    </div>
                </div>


                <div class="hover:bg-slate-600 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4   mt-8  bg-white  shadow-lg
                xs:max-w-full sm:max-w-sm lg:max-w-sm">
                    <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={myimage} alt="" />
                    <div class="space-y-2 text-center sm:text-left">
                        <div class="space-y-0.5">
                            <p class="text-lg font-semibold text-black">Erin Lindford</p>
                            <p class="font-medium text-gray-500">Product Engineer</p>
                        </div>
                        <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                            Message
                        </button>
                    </div>
                </div>

            </div> */}
            {/* <div className='container mx-px bg-red-400'>
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row p-4 gap-4 md:bg-yellow-400 lg:bg-slate-900">
                    <div className="bg-blue-500 p-4">Box 1</div>
                    <div className="bg-green-500 p-4">Box 2</div>
                    <div className="bg-red-500 p-4">Box 3</div>
                </div>
            </div> */}

            {/* <div className="flex  items-center sm:flex-col md:flex-row mt-0 md:mt-8">
                <div className="h-[40rem] overflow-hidden sm:w-full md:w-full lg:w-full sm:bg-red-600">
                    <img
                        className="w-full h-full object-contain"
                        src={myimage}
                        alt="Profile"
                    />
                </div>

                <div>
                    <h1>new capital city </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore mollitia quasi, sunt consequuntur veniam ad consequatur quia possimus necessitatibus modi! Ipsam qui nostrum distinctio consequatur maiores similique modi fuga.</p>
                </div>
            </div> */}

            {/* grid cols  */}
            {/* <div className='grid grid-cols-3 bg-gray-700'>
                <div className='bg-black-500 grid-cols-5'>
                    1
                </div>
                <div className='bg-red-500'>
                  2
                </div>
                <div className='bg-yellow-500'>
               3
                </div>
                 
            </div> */}


            <section className="bg-slate-600">
                <div className="grid grid-cols-12 bg-orange-600 container mx-auto ">
                    <div className="col-span-12 md:col-span-5">
                        <div className='flex flex-col md:flex-row'>
                            <div className="bg-yellow-500 p-4 w-full md:w-80">ppp</div>
                            <div className="bg-red-500 p-4 w-full md:w-80">ppp</div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 bg-slate-950">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-4 bg-blue-500 p-4">1</div>
                            <div className="bg-green-500 p-4 col-span-12 md:col-span-4">2</div>
                            <div className="bg-red-500 p-4 col-span-12 md:col-span-4">3</div>
                            <div className="bg-yellow-500 p-4 col-span-12 md:col-span-4">4</div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    );
}

export default Cards;
