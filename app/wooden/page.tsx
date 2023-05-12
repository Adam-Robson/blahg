import Link from 'next/link';
import Layout from './layout';

export default function Wooden() {
  return (
    <>
      <Link href="/">← home</Link>
      <h1>here are some recent articles I have written:</h1>
      <ul>
        <li>
          <h2>imaginative intervention</h2>
          <input type="date">2023-05-11</input>
        </li>
      </ul>
    </>
  );
}