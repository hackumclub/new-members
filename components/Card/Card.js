import styles from "./Card.module.css";

export default function Title({ title, hasButton}) {
  return (
    <div className={styles.box}>
      <p>{title}</p>
      {
        hasButton==true ? <TheButton></TheButton> : null
      }
    </div>
  );
}

const TheButton = ({Title}) => {
  return(
    <div> 
      <button className={styles.byt}>
        УНШИХ
      </button>
    </div>
  )
}