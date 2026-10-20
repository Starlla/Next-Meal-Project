import Link from 'next/link';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src="/images/logo.png" alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li><NavLink href="/meals">Browse Meals</NavLink></li>
            <li><NavLink href="/meals/share">Share Meal</NavLink></li>
            <li><NavLink href="/community">Foodies Community</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
