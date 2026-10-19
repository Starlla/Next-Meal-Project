import Link from 'next/link';

import MainHeaderBackground from './main-header-background';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src="/logo.png" alt="A server surrounded by magic sparkles." />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li><Link href="/meals">Browse Meals</Link></li>
            <li><Link href="/meals/share">Share Meal</Link></li>
            <li><Link href="/community">Foodies Community</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
