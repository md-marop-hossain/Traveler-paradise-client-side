import React from 'react';
import './LogIn.css';
import Checkbox from "@material-tailwind/react/Checkbox";
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
const LogIn = () => {
    const { signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogIn,
        handleRegistration,
        isLogIn,
        error,
        signInWithEmailAndPassword,
        setCreateNewUser,
        setError,
        setUserName
    } = useAuth();


    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
        // signInWithEmailAndPassword()
        //     .then(result => {
        //         const newUser = result.user;
        //         setCreateNewUser(newUser);
        //         setError('');
        //         setUserName();
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //     })
    }



    return (
        <div className="mt-16 bg-log">

            <div class="py-6">
                <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto lg:max-w-5xl">
                    <div class="hidden lg:block lg:w-full bg-cover login-image" >
                        {/* <p class="text-lg px-5 py-2 mt-1 font-semibold text-black text-opacity-60"><i> Are you travel experts or do you provide travel assistance? Use this travel registration form to plan and organize your clients trip. You can provide this travel tour registration form to your clients so they can easily register their trip ahead and fill out the required information about their travel preferences. This trip registration form template asks personal information and travel information such as cruise and hotel name, cabin types, hotel bedding and emergency contact number. Send this trip registration form to your clients now to start accepting travel registrations!</i></p> */}
                    </div>
                    <div class="w-full p-8 lg:w-1/2">
                        <h2 class="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                        <p class="text-xl text-gray-600 text-center">Welcome back!</p>
                        <button onClick={handleGoogleLogin} class="flex w-100 items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <div class="px-4 py-3">
                                <svg class="h-6 w-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>
                            <h1 class="px-1 py-3 w-5/6 text-center text-gray-600 font-bold text-2xl">Sign in with Google</h1>
                        </button>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="border-b w-1/5 lg:w-1/4"></span>
                            <a href="#" class="text-xs text-center text-gray-500 uppercase">or login with email</a>
                            <span class="border-b w-1/5 lg:w-1/4"></span>
                        </div>







                        <form onSubmit={handleRegistration}>

                            {
                                !isLogIn && <div class="mt-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input onBlur={handleNameChange} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="name" />
                                </div>

                            }

                            <div class="mt-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input onBlur={handleEmailChange} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                            </div>
                            <div class="mt-4">
                                <div class="flex justify-between">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <a href="#" class="text-xs text-gray-500">Forget Password?</a>
                                </div>
                                <input onBlur={handlePasswordChange} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                            </div>
                            <div class="mt-3">
                                <Checkbox
                                    color="gray"
                                    text="Already Registered?"
                                    id="checkbox"
                                    onChange={toggleLogIn}
                                />
                            </div>
                            <div class="mt-3">
                                <h5>{error}</h5>
                            </div>

                            <div class="mt-8">
                                <button type="submit" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">{isLogIn ? 'Login' : 'Register'}</button>
                            </div>
                        </form>













                        {/* 
                        <div class="mt-4 flex items-center justify-between">
                            <span class="border-b w-1/5 md:w-1/4"></span>
                            <a href="#" class="text-xs text-gray-500 uppercase">or sign up</a>
                            <span class="border-b w-1/5 md:w-1/4"></span>
                        </div> */}
                    </div>
                </div>
            </div>


        </div >
    );
};

export default LogIn;