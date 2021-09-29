import styles from "./Button.module.css";

export default function Button({ href, content, type }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {type === "discord" ? (
        <button className={`${styles.default} ${styles.discord}`}>
          {content}
        </button>
      ) : (
        <button className={styles.default}>{content}</button>
      )}
    </a>
  );
}
