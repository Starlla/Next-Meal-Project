import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <p>This app was built while learning NextJS.</p>
      <p><Link href="/">Back to Home</Link></p>
    </main>
  );
}
