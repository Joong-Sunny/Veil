'use client'

import Link from "next/link";
import Image from 'next/image'

export default function TapBar() {

  return (
    <div className="flex justify-around w-screen">
      <Link href="/">
        <Image
          src="/home.svg"
          alt="home"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
        <span>home</span>
      </Link>
      <Link href="/swipe">
        <Image
          src="/search.svg"
          alt="swipe"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
        <span>swipe</span>
      </Link>
      <Link href="/mypage">
        <Image
          src="/user.svg"
          alt="user"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
        <span>myInfo</span>
      </Link>
    </div>
  );
}