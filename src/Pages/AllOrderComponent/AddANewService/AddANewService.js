import React, { useEffect, useRef, useState } from 'react';
import Button from "@material-tailwind/react/Button";

const AddANewService = () => {
    const imageUrlRef = useRef();
    const countryNameRef = useRef();
    const shortDetailsRef = useRef();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const id = services.length + 1;

    const handleAddServices = e => {
        const image = imageUrlRef.current.value;
        const country = countryNameRef.current.value;
        const details = shortDetailsRef.current.value;
        const newService = { id, country, image, details }

        fetch('https://dark-goblin-31364.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Sucessfully added the user.');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div class="service-bg min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3  sm:max-w-xl sm:mx-auto">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto max-w-580-px">
                        <div>
                            <h1 class="text-2xl font-semibold">Add a new service to show Home page service</h1>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <form onSubmit={handleAddServices}>
                                    <div class="relative">
                                        <input ref={imageUrlRef} autocomplete="off" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mt-2 mb-3" placeholder="Email address" required />
                                        <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ">Enter Image URL</label>
                                    </div>
                                    <div class="relative">
                                        <input ref={countryNameRef} autocomplete="off" id="password" name="password" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mt-2 mb-3" placeholder="Password" required />
                                        <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Country Name</label>
                                    </div>
                                    <div class="relative">
                                        <textarea ref={shortDetailsRef} autocomplete="off" id="password" name="password" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mt-2" placeholder="Password" required />
                                        <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Short Details</label>
                                    </div>
                                    <div class="relative mt-5">
                                        <Button
                                            color="blue"
                                            buttonType="filled"
                                            size="lg"
                                            rounded={false}
                                            block={true}
                                            iconOnly={false}
                                            ripple="light"
                                        >
                                            Submit Data to Server
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddANewService;