import Link from 'next/link';

export default function ShareMealPage() {
  return (
    <main>
      <h1>Share Meal</h1>
      <p><Link href="/meals">Back to Meals</Link></p>
    </main>
  );
}
