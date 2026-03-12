import Banner from '../../components/Banner/Banner';
import data from '../../data/home.json';
import styles from './Home.module.scss';

import bioImg from '../../assets/images/home/bio.webp';
import logo from '../../assets/images/home/logo.webp';
import prop1Img from '../../assets/images/home/prop1.webp';
import prop2Img from '../../assets/images/home/prop2.webp';
import partidoImg from '../../assets/images/home/partido.webp';

const imageMap = {
  prop1: prop1Img,
  prop2: prop2Img,
};

function Home() {
  return (
    <>
      {/* Inicio */}
      <section id="inicio" className={`${styles.drawer} ${styles.inicio}`}>
        <Banner />
      </section>

      {/* Bio */}
      <section id="bio" className={`${styles.drawer} ${styles.bio}`}>
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className={styles.bioWatermark}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.bioInner}>
          <div className={styles.bioImage}>
            <img src={bioImg} alt="Guillermo Nugent" />
          </div>
          <div className={styles.bioText}>
            <h2>{data.bio.title}</h2>
            <p>{data.bio.body}</p>
          </div>
        </div>
      </section>

      {/* Propuestas */}
      <section id="propuestas" className={styles.propuestas}>
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className={styles.propuestasWatermark}
          loading="lazy"
          decoding="async"
        />
        <h2 className={styles.propuestasTitle}>Mis propuestas</h2>
        <div className={styles.propuestasList}>
          {data.propuestas.map((prop, index) => (
            <div
              key={prop.id}
              className={`${styles.propuesta} ${index % 2 !== 0 ? styles.reverse : ''}`}
            >
              <div className={styles.propuestaImage}>
                <img src={imageMap[prop.imageKey]} alt={prop.title} />
              </div>
              <div className={styles.propuestaText}>
                <h3>{prop.title}</h3>
                <p>{prop.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partido */}
      <section id="partido" className={`${styles.drawer} ${styles.partido}`}>
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
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className={`${styles.partidoWatermark} ${styles.partidoWm3}`}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.partidoInner}>
          <div className={styles.partidoImage}>
            <img src={partidoImg} alt={data.partido.title} />
          </div>
          <div className={styles.partidoText}>
            <h2>{data.partido.title}</h2>
            <p>{data.partido.body}</p>
            <a
              href={data.partido.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {data.partido.ctaLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
