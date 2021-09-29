import styles from "./Card.module.css";

export default function Card({ description, children }) {
  return (
    <div className={styles.box}>
      <p className={styles.description}>{description}</p>
      <div>{children}</div>
    </div>
  );
}
