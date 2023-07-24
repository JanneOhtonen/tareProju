import React, { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className='p-8 bg-black rounded shadow-md'>
                <h2 className='text-2xl font-poppins mb-4'>Login</h2>
                {error && <p className='text-red-500 mb-4'>{error}</p>}
                <div className='mb-4'>
                    <label htmlFor='email' className='block font-medium text-white'>Email</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}
                        className='mt-1 px-4 py-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block font-medium text-white'>Password</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}
                        className='mt-1 px-4 py-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500' />
                </div>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login