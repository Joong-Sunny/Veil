'use client'

import LogoutButton from "@/app/components/LogoutButton";
import LoginButton from "@/app/components/LoginButton";
import Link from "next/link";
import {useSession} from "next-auth/react";
import SessionTimeLeft from "@/app/components/SessionTimeLeft";

export default function LoginStatus() {
  const {data: session} = useSession();

  return (
    <>
      {/*<div className="flex items-center bg-amber-100">*/}
      {/*<div className="flex justify-between w-screen">*/}
      <div>
        <span> ( 개발용 로그인 영역 ) </span>
        {session ?
          <span>
            안녕하세요 {session.user.name} 님🎃
            <SessionTimeLeft />
            <LogoutButton />
          </span>
          :
          <LoginButton />}
      </div>
      <Link href="/mypage">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
          마이페이지
        </button>
      </Link>
      {/*</div>*/}
      {/*</div>*/}
    </>
  );
}