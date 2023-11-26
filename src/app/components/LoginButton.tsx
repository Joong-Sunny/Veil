'use client';

import {signIn, signOut} from "next-auth/react";

const LoginButton = () => {
    return (
        <div>
          <button
            onClick={() => {signIn()}}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
            Login
          </button>
          <button
            onClick={() => {signOut()}}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
            Logout
          </button>
        </div>
    );
}

export default LoginButton;