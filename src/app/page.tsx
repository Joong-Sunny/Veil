import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-semibold text-center mt-10 "> veil someone, with your safety</h1>
        <Image
          src="/landing-page.jpeg"
          alt="home"
          width={400}
          height={400}
          priority
        />
    </main>
  )
}
