'use client';

import React, {useState, useEffect} from 'react';
import {signOut, useSession} from "next-auth/react";

const LogoutButton = () => {
  const {data: session} = useSession();

  return (
    <>
      <button
        onClick={() => {
          signOut()
        }}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
        로그아웃
      </button>
    </>
  );
}

export default LogoutButton;