import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";

const TitleList = [
  {
    title: "Клубийн эрхэм зорилго",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HACKUM Тавтай морил</title>
        <meta
          name="description"
          content="HACKUM клубийн шинэ элсэгчдэд зориулсан вэб"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.header}>Hackum Logo</nav>
      <main className={styles.main}>
        <h1>Lorem ipsum</h1>
        <p>
          Юуны өмнө манай клубд нэгдэж, бидний нэг болсон танд баяр хүргэе. Таны
          клубд ороод хамгийн түрүүнд хийх зүйлсийг дарааллаар нь уг вэб дээр
          байршууллаа.
        </p>
        {/* Үндсэн танилцуулга хэсэг */}
        <div>
          {TitleList.map((item, index) =>
            <Title key={index} title={item.title} number={index + 1} />
          )}
        </div>
      </main>
    </div>
  );
}
