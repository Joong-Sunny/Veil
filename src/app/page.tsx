import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-8xl font-semibold text-center mt-10 "> veil</h1>
      <h3 className="text-2xl font-semibold text-center mt-10 "> veil someone, with your safety</h3>
        <Image
          src="/temp-logo.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      <span>(아직 공사중 입니다😘)</span>

    </main>
  )
}
