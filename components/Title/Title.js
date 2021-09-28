import styles from "./Title.module.css";

export default function Title({ title, number }) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.ovel}>{number}</div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
