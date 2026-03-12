import styles from './PropuestaCard.module.scss';

function PropuestaCard({ title, body }) {
  return (
    <article className={styles.propuesta}>
      <div className={styles.propuestaText}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

export default PropuestaCard;
