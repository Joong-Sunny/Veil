'use client';

import {signIn, signOut} from "next-auth/react";

export default function Register() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div> {/* Wrapper for the form and social buttons */}
        <form
          method="POST"
          action="/api/auth/signup"
          className="flex flex-col space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="이름"
            className="border p-2"
          />
          <input
            name="email"
            type="text"
            placeholder="이메일"
            className="border p-2"
          />
          <input
            name="password"
            type="password"
            placeholder="비번"
            className="border p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2"
          >
            id/pw 가입요청
          </button>
        </form>
        <div className="flex flex-row justify-center space-x-4 mt-4"> {/* Container for social buttons */}
          <button
            className="bg-yellow-400 border-2 border-transparent rounded-md text-lg p-3 w-96"
            onClick={() => signIn("kakao")}
          >
            카카오 로그인
          </button>
          <button
            className="bg-black text-white border-2 border-transparent rounded-md text-lg p-3 w-96"
            onClick={() => signIn("github")}
          >
            깃헙 로그인
          </button>
        </div>
      </div>
    </div>
  )
}
