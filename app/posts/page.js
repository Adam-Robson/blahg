import Link from 'next/link';
import Image from 'next/image';

export default function Posts() {
  return (
    <>
      <Link href="/">← home</Link>
      <Link href="/posts/1">
        <h1>imaginative intervention</h1>
        <span>May 11, 2023</span></Link>
    </>
  );
}