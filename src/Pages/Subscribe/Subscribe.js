import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div style={{ backgroundColor: "#c1c8d475" }}>
            <div class="flex justify-center">
                <div class="flex justify-center flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
                    <div class="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
                        <div class="py-6 px-8 md:py-0">
                            <h2 class="text-white-700 text-2xl font-bold md:text-gray-100">Subscribe Now to Join with us</h2>
                            <p class="mt-2 text-white-600 md:text-gray-400">Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
                        <form>
                            <div class="flex flex-row rounded-lg overflow-hidden sm:flex-row">
                                <input class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email" />
                                <button class="py-3 px-4 bg-gray-600 text-gray-100 font-semibold uppercase hover:bg-gray-800">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;