import bannerImg from '../../assets/images/home/banner.webp';
import styles from './Banner.module.scss';

function Banner() {
  return (
    <section className={styles.banner}>
      <img src={bannerImg} alt="Guillermo Nugent" />
    </section>
  );
}

export default Banner;
