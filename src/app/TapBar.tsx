'use client'

import Link from "next/link";
import Image from 'next/image'

export default function TapBar() {

  return (
    <footer className="flex justify-around absolute bottom-0 w-full border-t border-gray-300">
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
      <Link href="/message">
        <Image
          src="/message.svg"
          alt="user"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
        <span>message</span>
      </Link>
      <Link href="/mypage">
        <Image
          src="/user.svg"
          alt="user"
          className="text-blue-500"
          width={24}
          height={24}
          priority
        />
        <span>myInfo</span>
      </Link>

    </footer>
  );
}