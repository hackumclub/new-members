import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";

const TitleList = [
  {
    title: "Клубын эрхэм зорилго",
    description: "Бид өөрсдийн мэдлэг чадвараа ашиглан хүмүүсийн амьдрал, мэдээллийн хүртээмжийг нэмэгдүүлж, нийгмийн сайн сайханд хувь нэмрээ оруулах шинэ, шилдэг санаачлага гарган хэрэгжүүлдэг клуб юм. Бид өөрчлөлтийг хүлээдэг биш өөрсдөө манлайлж хийдэг хамт олон болж мэдээллийн ил, тод хүртээмжтэй байдлыг өндөр түвшинд хүргэхийг эрмэлзэнэ",
  },
  {
    title: "Клубын алсын хараа",
    description: "Гишүүн бүр суралцах хугацаандаа эзэмшиж буй мэргэжлийнхээ дагуу нийгэм болоод хүмүүсийн амьдралд нөлөөлөхүйц төсөл, хөтөлбөрийн нэг хэсэг болж туршлага хуримтлуулж авдаг Монгол улсын мэдээллийн технологийн хамгийн шилдэг клуб болох"
  },
  {
    title: "Дотоод журам унших",
    description: "Клубийнхээ дотоод журамтай заавал сайтар танилцаарай 😄",
    wButton: true,
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
      <nav className={styles.header}>HACKUM LOGO</nav>
      <main className={styles.main}>
        <h1 className={styles.h1}>ХАКУМ КЛУБД ТАВТАЙ МОРИЛ</h1>
        <p className={styles.p}>
          Юуны өмнө манай клубд нэгдэж, бидний нэг болсон танд баяр хүргэе. Таны
          клубд ороод хамгийн түрүүнд хийх зүйлсийг дарааллаар нь уг вэб дээр
          байршууллаа.
        </p>
        {/* Үндсэн танилцуулга хэсэг */}
        <div>
          {TitleList.map((item, index) => 
            <>
              <Title key={index} title={item.title} number={index + 1} />
              <Card title={item.description} hasButton={item.wButton}></Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
