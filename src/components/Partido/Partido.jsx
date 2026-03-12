import { useEffect, useRef } from 'react';
import styles from './Partido.module.scss';
import logo from '../../assets/images/home/logo.webp';
import partidoImg from '../../assets/images/home/partido.webp';
import adornoImg from '../../assets/images/home/adorno.webp';
import { initPartidoEffects } from '../../scripts/partidoEffects';

function Partido({ partido }) {
  const sectionRef = useRef(null);
  const adornoRef = useRef(null);
  const shareRef = useRef(null);

  useEffect(() => {
    const cleanup = initPartidoEffects(
      sectionRef.current,
      adornoRef.current,
      shareRef.current,
    );
    return cleanup;
  }, []);

  return (
    <section id="partido" className={styles.partido} ref={sectionRef}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className={`${styles.partidoWatermark} ${styles.partidoWm1}`}
        loading="lazy"
        decoding="async"
      />
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className={`${styles.partidoWatermark} ${styles.partidoWm2}`}
        loading="lazy"
        decoding="async"
      />

      <div className={styles.partidoInner}>
        <div className={styles.partidoImage}>
          <img src={partidoImg} alt={partido.title} />
        </div>
        <div className={styles.partidoText}>
          <h2>{partido.title}</h2>
          <p>{partido.body}</p>
          <div className={styles.ctaGroup}>
            <a
              href={partido.ctaPlanHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {partido.ctaPlanLabel}
            </a>
            <a
              href={partido.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.cta} ${styles.ctaSecondary}`}
            >
              {partido.ctaLabel}
            </a>
          </div>
        </div>
      </div>
      <img
        src={adornoImg}
        alt=""
        aria-hidden="true"
        className={styles.partidoAdorno}
        ref={adornoRef}
        loading="lazy"
        decoding="async"
      />
      <button
        type="button"
        ref={shareRef}
        className={styles.shareButton}
      >
        COMPARTE
      </button>
    </section>
  );
}

export default Partido;
