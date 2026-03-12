import styles from './Footer.module.scss';
import logo from '../../assets/images/navbar/logo.webp';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Hoja de Vida', href: '#bio' },
  { label: 'Propuestas', href: '#propuestas' },
  { label: 'Buen Gobierno', href: '#partido' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logoLink}>
          <img src={logo} alt="Guillermo Nugent" className={styles.logo} />
        </a>

        <nav className={styles.links} aria-label="Enlaces del sitio">
          {links.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Guillermo Nugent
        </p>
      </div>
    </footer>
  );
}

export default Footer;
