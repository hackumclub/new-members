import styles from "./Button.module.css";
import Image from 'next/image';
import Discord from '../../public/discord.png'
import Facebook from '../../public/fb.png'
export default function Button({ href, content, type }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {type === "discord" ? (
        <button className={`${styles.default} ${styles.discord}`}>
          <Image src={Discord} height={30} width={30} />
          {content}
        </button>
      ) : (
        <button className={styles.default}>
          <Image src={Facebook} />
          {content}
        </button>
      )}
    </a>
  );
}
