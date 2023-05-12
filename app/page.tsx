import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col justify-center items-center">
        <header className="min-w-full flex justify-end">
          <Image
            src="/faviconb.png"
            width="212"
            height="212"
            alt="adaam logo"
            className="p-6 w-40"
          />
        </header>
        <h1 className="text-center mx-2 text-2xl md:text-4xl font-semibold my-10 subpixel-antialiased">
          {'hi! i\'m a software engineer and writer in the pacific northwest, US.' }
        </h1>
        <Image
          src="/adam.png"
          alt="image of adam"
          width="225"
          height="225"
          className="rounded-full"
        />
        <p className="z tracking-wide font-light text-xl md:text-2xl text-center subpixel-antialiased mx-4 my-10">
          <Link className="link" href="/posts"><em>this</em></Link> is where you can find items that i have written
        </p>
      </section>
    </main>
  )
}
