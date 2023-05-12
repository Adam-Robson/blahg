import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col justify-center items-center">
        <header className="min-w-full flex justify-end">
          <Image src="/logo.svg" width="212" height="212" alt="adaam logo" />
        </header>
        <h1 className="text-lg opacity-50">
          i am a software developer living in the pacific northwest, US. 
        </h1>
        <p className="">
          <Link className="" href="/posts">this </Link>is where i post any articles that i write
        </p>
        
      </section>
    </main>
  )
}
