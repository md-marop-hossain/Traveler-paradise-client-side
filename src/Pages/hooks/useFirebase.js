import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Login/FireBase/firebase.config";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const [passUser, setPassUser] = useState({});
    const [createNewUser, setCreateNewUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long')
            return;
        }
        isLogIn ? processLogIn(email, password) : registerNewUser(email, password);
    }

    const processLogIn = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const passUser = result.user;
                setPassUser(passUser);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const registerNewUser = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)

    }
    const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const handleResetPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then((result) => {
            })
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const toggleLogIn = (e) => {
        setIsLogIn(e.target.checked);
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        processLogIn,
        registerNewUser,
        handleResetPassword,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogIn,
        setUser,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        isLogIn,
        setIsLogIn,
        passUser,
        createNewUser,
        signInWithEmailAndPassword,
        setCreateNewUser,
        setUserName

    }
};

export default useFirebase;