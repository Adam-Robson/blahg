import Image from 'next/image';
import Link from 'next/link';

const Home: React.FunctionComponent = () => {
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
          {'hi! i\'m a software engineer, musician and writer living in the pacific northwest, US.' }
        </h1>
        <Image
          src="/adam.png"
          alt="image of adam"
          width="225"
          height="225"
          className="rounded-full"
        />
        <article className="wrap">
          <p className="caption">
            <em className="text-lg font-semibold">
              find my work:
            </em>
          <Link className="link" href="https://github.com/Adam-Robson">applications</Link>
          <Link className="link" href="adamrayrobsonportfolio.netlify.app">portfolio</Link>
          <Link className="link" href="/posts">writings</Link>
          <Link className="link" href="https://spoti.fi/3QNqMuE">spotify</Link>
          <Link className="link" href="/wooden">wooden</Link>
          <Link className="link" href="/visible">visible</Link>
          <Link className="link" href="#">travels</Link>
        </p>
       
        <p className="caption"><em className="text-lg font-semibold">connect with me:</em>
          <Link className="link" href="https://www.linkedin.com/in/adamrayrobson/">LinkedIn</Link>
          <Link className="" href="https://www.facebook.com/adamrayrobson" >Facebook</Link>
          <Link className="" href="https://www.instagram.com/hiimadaam/" >Instagram</Link>

          </p>
        </article>
        <footer className="w-full text-center pb-10 absolute bottom-0">
         <p className="">buy me a 
          <Link className="link" href="https://www.buymeacoffee.com/AdamRobson"> coffee</Link>
          </p>
        </footer>
        </section>
    </main>
  )
}

export default Home;
