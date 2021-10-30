import React from 'react';
import './Success.css';

const Success = () => {
    return (
        <div>
            <div class="bg-gray-900 p-28 div-bg-color">
                <div class='md:flex'>
                    <div class="md:w-6/12 text-black div-inside-color p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
                        <div>
                            <h1 class="text-4xl mb-5 font-bold">Number of <span class="text-indigo-300">international tourist </span> arrivals worldwide 1950-2020</h1>
                            <h2 class="text-sm mb-12">The coronavirus (COVID-19) pandemic disrupted travel and tourism in 2020, causing the number of international tourist arrivals worldwide to drop by roughly 73 percent over the previous year. Overall, international tourist arrivals reached around 402 million in 2020 - the lowest figure recorded since 1989 - after peaking at nearly 1.47 billion in 2019.</h2>
                            <div class="flex">
                                <div class="mr-8">
                                    <p class="text-2xl font-bold">402M+</p>
                                    <p class="text-sm">tourist</p>
                                </div>
                                <div class="mr-8">
                                    <p class="text-2xl font-bold">120+</p>
                                    <p class="text-sm">country</p>
                                </div>
                                <div>
                                    <p class="text-2xl font-bold">100k+</p>
                                    <p class="text-sm">events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-6/12 relative">
                        <div class="bg-black-500 w-full h-full opacity-60 absolute sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg"></div>
                        <img class="h-full w-full object-cover sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg" src={"https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"} alt="Banner Desktop" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;