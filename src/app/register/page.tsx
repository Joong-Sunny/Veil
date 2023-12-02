'use client';

import {signIn, signOut} from "next-auth/react";
import Spacing from "@/app/components/Spacing";

export default function Register() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
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
        <Spacing direction="vertical" size={4} />
        <Spacing direction="vertical" size={4} />
        <div className="flex flex-col"> {/* Container for social buttons */}
          <button
            className="bg-yellow-400 border-2 border-transparent rounded-md text-lg p-3 w-96"
            onClick={() => signIn("kakao")}
          >
            카카오 로그인
          </button>
          <Spacing direction="vertical" size={4} />
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
