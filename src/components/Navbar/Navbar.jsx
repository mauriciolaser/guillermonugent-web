import { useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/navbar/logo.webp';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Hoja de Vida', href: '#hoja-de-vida' },
  { label: 'Propuestas', href: '#propuestas' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logoLink}>
          <img src={logo} alt="Guillermo Nugent" className={styles.logo} />
        </a>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
