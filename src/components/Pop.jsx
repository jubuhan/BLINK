import React, { useState } from 'react';
import google from '../assets/img/google.png';
import close from '../assets/img/close.png';
import { usePop } from '../stores/usePop';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Pop() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { pop, togglePop } = usePop();

  const handleEmailSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in (e.g., navigate to a different route)
      navigate('/home');
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle sign-in error (e.g., display an error message)
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful sign-in (e.g., navigate to a different route)
      navigate('/home');
    } catch (error) {
      console.error('Google sign-in error:', error);
      // Handle sign-in error (e.g., display an error message)
    }
  };

  return (
    <>
      {pop && (
        <div>
          <div className="font-Raleway h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="rounded-md duration-300 w-[350px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white">
              <div className="flex items-center justify-between">
                <h1 className=" uppercase font-bold text-xl ml-1">User Login</h1>
                <div>
                  <img onClick={togglePop} className="w-4 cursor-pointer" src={close} alt="close" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="email"
                  className="mt-6 w-full rounded-xl border border-gray-300 px-2 py-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-gray-300 px-2 py-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => handleEmailSignIn(email, password)}
                  className="w-full cursor-pointer hover:shadow-lg hover:scale-105 duration-300 px-3 py-2 rounded-xl text-white bg-black/95 hover:bg-white hover:text-black"
                >
                  Login
                </button>
                <p className="text-center font-light">or</p>
                <div className="flex justify-between relative items-center">
                  <img className="w-8 absolute" src={google} alt="google" />
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full rounded-xl bg-blue-500 text-white px-2 py-2 duration-300 hover:bg-blue-600"
                  >
                    continue with google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}