import React, { useState } from 'react';
import google from '../assets/img/google.png';
import close from '../assets/img/close.png';
import { usePop } from '../stores/usePop';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Pop() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { pop, togglePop } = usePop();

  const handleEmailSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError('Sign-in error: ' + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      setError('Google sign-in error: ' + error.message);
    }
  };

  const handleRegister = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError('Registration successful! You can now log in.');
      setShowRegisterForm(false);
      setRegisterEmail('');
      setRegisterPassword('');
      setConfirmPassword('');
    } catch (error) {
      setError('Registration error: ' + error.message);
    }
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setError('');
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
              {!showRegisterForm ? (
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-semibold">Login</h2>
                  <input
                    type="text"
                    placeholder="email"
                    className="w-full rounded-xl border border-gray-300 px-2 py-1"
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
                  <button
                    onClick={toggleRegisterForm}
                    className="w-full cursor-pointer hover:shadow-lg hover:scale-105 duration-300 px-3 py-2 rounded-xl text-white bg-green-500 hover:bg-green-600"
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-semibold">Register</h2>
                  <input
                    type="text"
                    placeholder="email"
                    className="w-full rounded-xl border border-gray-300 px-2 py-1"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-xl border border-gray-300 px-2 py-1"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="w-full rounded-xl border border-gray-300 px-2 py-1"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    onClick={() => handleRegister(registerEmail, registerPassword, confirmPassword)}
                    className="w-full cursor-pointer hover:shadow-lg hover:scale-105 duration-300 px-3 py-2 rounded-xl text-white bg-green-500 hover:bg-green-600"
                  >
                    Submit
                  </button>
                  <button
                    onClick={toggleRegisterForm}
                    className="w-full cursor-pointer hover:shadow-lg hover:scale-105 duration-300 px-3 py-2 rounded-xl text-white bg-red-500 hover:bg-red-600"
                  >
                    Back
                  </button>
                </div>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}