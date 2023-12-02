'use client'
import {useState, useEffect} from "react";
import {useSession} from "next-auth/react";

export default function SessionTimeLeft() {
  const {data: session} = useSession();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (session) {
      const expires = new Date(session.expires).getTime();
      const now = new Date().getTime();
      setTimeLeft(expires - now);
    }
  }, [session]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime && prevTime <= 1000) {
          clearInterval(timer);
          window.location.reload(); // 세션만료, 페이지 새로고침
          return 0;
        }
        return prevTime && prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const minutesLeft = timeLeft ? Math.floor(timeLeft / 60000) : 0;
  const secondsLeft = timeLeft ? Math.floor((timeLeft % 60000) / 1000) : 0;

  return (
    <p>로그아웃까지 남은 시간: {minutesLeft}분 {secondsLeft}초</p>
  );
}