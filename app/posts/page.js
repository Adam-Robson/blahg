import Link from 'next/link';
import Layout from './layout';

export default function FirstPost() {
  return (
    <>
      <Link href="/">← Back to home</Link>
      <h1>First Post</h1>

    </>
  );
}