import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section class="relative  bg-blueGray-50">
                <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div class="absolute banner-div top-0 w-full h-full bg-center bg-cover" >
                        <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div class="container relative mx-auto">
                        <div class="items-center flex flex-wrap">
                            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div class="pr-12">
                                    <h1 class="text-white font-semibold text-5xl">
                                        Your journey starts with us
                                    </h1>
                                    <p class="mt-4 text-lg text-blueGray-200">
                                        <i>“Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind”</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px banner-divv" >
                        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section class="pb-10 bg-blueGray-200 -mt-24">
                    <div class="flex flex-wrap">
                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <i class="fas fa-award"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Awarded Agency</h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                        The International Travel & Tourism Awards shine a spotlight on exceptional individuals and businesses that have made incredible contributions to the global travel industry.

                                        Winning an award is a unique opportunity to demonstrate your ability to deliver great ideas and see your work celebrated as a source of best practice for peers to be inspired from, and to learn from.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-4/12 px-4 text-center">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                        <i class="fas fa-retweet"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Free Revisions</h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                        Our revision policy strives to meet customer satisfaction, comfort, and a peace of mind. Our company provides minor revisions and amendments to the initial order as a part of our ongoing service. Revisions should only include changes and adjustments that were not successfully met in the initial order and that are within the guidelines specified in the order now form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                        <i class="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Verified Company</h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                        Every year ICTS Europe saves airlines millions of dollars in fines and flight expenses, through the Travel Document Verification scheme. With airlines having to bear the costs of repatriating passengers found to be travelling on fraudulent, expired, or erroneous documents as well as any related (and often hefty) fines, our Travel Document Verification scheme offers a viable solution to a growing concern.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Banner;