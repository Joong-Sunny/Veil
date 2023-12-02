'use client';

import Link from "next/link";

const LoginButton = () => {
    return (
          <Link href="/register">
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
              회원가입 하러가기
            </button>
          </Link>
    );
}

export default LoginButton;