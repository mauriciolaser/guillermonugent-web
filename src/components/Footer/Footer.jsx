import styles from './Footer.module.scss';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Hoja de Vida', href: '#hoja-de-vida' },
  { label: 'Propuestas', href: '#propuestas' },
  { label: 'Buen Gobierno', href: 'https://www.partidodelbuengobierno.pe', external: true },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        {links.map(({ label, href, external }) => (
          <a
            key={href}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {label}
          </a>
        ))}
      </nav>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Guillermo Nugent
      </p>
    </footer>
  );
}

export default Footer;
