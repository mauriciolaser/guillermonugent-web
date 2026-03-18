import Banner from '../../components/Banner/Banner';
import Partido from '../../components/Partido/Partido';
import PropuestaCard from '../../components/PropuestaCard/PropuestaCard';
import data from '../../data/home.json';
import styles from './Home.module.scss';

import bioImg from '../../assets/images/home/bio.webp';
import logo from '../../assets/images/home/logo.webp';

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
            <p>
              Soy <span style={{ fontWeight: 600 }}>Guillermo Nugent</span>,
              historiador, sociólogo y docente en la UNMSM. Nací en Miraflores y
              mi madre enseñó en una escuela pública de este distrito. Como
              catedrático, durante décadas he vivido el histórico{' '}
              <span style={{ color: '#D40E0B', fontWeight: 600 }}>
                abandono de la universidad pública
              </span>{' '}
              y he sido testigo de la lucha de muchos jóvenes por una{' '}
              <span style={{ fontWeight: 600 }}>mejor educación</span>. Y, como
              millones de peruanos, he visto también cómo la falta de
              trayectorias sólidas y confiables en los principales puestos del
              Estado degrada la calidad de los servicios públicos.
            </p>
          </div>
        </div>
      </section>

      {/* Voto */}
      <section id="voto" className={`${styles.drawer} ${styles.voto}`}>
        <p className={styles.votoText}>{data.voto.text}</p>
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
        <div className={styles.propuestasList}>
          {data.propuestas.map((prop) => (
            <PropuestaCard key={prop.id} title={prop.title} body={prop.body} />
          ))}
        </div>
      </section>

      {/* Partido */}
      <Partido partido={data.partido} />
    </>
  );
}

export default Home;
