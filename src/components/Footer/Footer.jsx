import styles from './Footer.module.scss';
import logo from '../../assets/images/home/logo.webp';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Hoja de Vida', href: '#bio' },
  { label: 'Propuestas', href: '#propuestas' },
  { label: 'Buen Gobierno', href: '#partido' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className={styles.backgroundLogo}
        loading="lazy"
        decoding="async"
      />

      <div className={styles.inner}>
        <h2 className={styles.title}>Guillermo Nugent</h2>

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
