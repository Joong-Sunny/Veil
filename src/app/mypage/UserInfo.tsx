'use client'

import {useState, useEffect} from "react";
import {useSession} from "next-auth/react";

export default function UserInfo() {
  console.log("render!!")
  const {data: session} = useSession();
  const [data, setData] = useState<unknown>(null)

  if (!session) {
    return (
      <>
        <h1>My Page</h1>
        <p>You are not logged in</p>
      </>
    );
  }

  return (
    <>
      <h1>My Page</h1>
      <p>My name is {session?.user?.name}</p>
      <p>My email is {session?.user?.email}</p>
      {/*<p>로그아웃까지 남은 시간: {minutesLeft}분 {secondsLeft}초</p>*/}
    </>
  );
}