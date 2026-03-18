import { useEffect, useRef } from 'react';
import bannerDesktop from '../../assets/images/home/banner-desktop.webp';
import bannerMobile from '../../assets/images/home/banner-mobile.webp';
import logo from '../../assets/images/home/logo.webp';
import styles from './Banner.module.scss';
import { initColoredWatermarks } from '../../scripts/partidoEffects';

function Banner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    return initColoredWatermarks(sectionRef.current);
  }, []);

  return (
    <section className={styles.banner} ref={sectionRef}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className={styles.bannerWatermark}
        loading="lazy"
        decoding="async"
      />
      <picture>
        <source media="(max-width: 768px) and (orientation: portrait)" srcSet={bannerMobile} />
        <img src={bannerDesktop} alt="Guillermo Nugent" />
      </picture>
    </section>
  );
}

export default Banner;
