import React from 'react';
import Button from "@material-tailwind/react/Button";
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const notify = () => toast.success("Successfully Submitted!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    return (
        <div>
            <section class="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat section-bgg"
            >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                    <div class="lg:w-3/6 lg:pr-0 pr-0">
                        <h1 class="font-medium text-5xl text-white">Send us a message online</h1>
                        <p class="leading-relaxed mt-4 text-white mr-3">
                            To request for special assistance, resolve baggage issues, or get your questions answered, the best way to reach us is to use the contact form.</p>
                    </div>
                    <div class="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-600 font-bold">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600 font-bold">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600 font-bold">Phone</label>
                            <input type="email" id="phone" name="phone" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600 font-bold">Message</label>
                            <textarea id="message" name="message" rows="4" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"> </textarea>
                        </div>
                        {/* <button class="text-white button-color rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg">Submit</button> */}
                        <Button
                            color="blueGray"
                            buttonType="filled"
                            size="lg"
                            rounded={false}
                            block={true}
                            iconOnly={false}
                            ripple="light"
                            onClick={notify}
                        >
                            Submit
                        </Button>
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Contact;

