'use client';

import { signOut} from "next-auth/react";
import Link from "next/link";

const LoginButton = () => {

    return (
        <div>
          <Link href="/register">
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
              회원가입 하러가기
            </button>
          </Link>
          <button
            onClick={() => {signOut()}}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
            로그아웃
          </button>
        </div>
    );
}

export default LoginButton;