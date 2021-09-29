import Head from "next/head";
import styles from "../styles/Home.module.css";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import Logo from '../public/logo.png';
import Image from 'next/image'
import Avatar1 from '../public/profile1.png';
import Avatar from '../public/profile.png';
const Items = [
  {
    title: "Клубийн эрхэм зорилго",
    description:
      "Бид өөрсдийн мэдлэг чадвараа ашиглан хүмүүсийн амьдрал, мэдээллийн хүртээмжийг нэмэгдүүлж, нийгмийн сайн сайханд хувь нэмрээ оруулах шинэ, шилдэг санаачлага гарган хэрэгжүүлдэг клуб юм. Бид өөрчлөлтийг хүлээдэг биш өөрсдөө манлайлж хийдэг хамт олон болж мэдээллийн ил, тод хүртээмжтэй байдлыг өндөр түвшинд хүргэхийг эрмэлзэнэ",
  },
  {
    title: "Клубийн алсын хараа",
    description:
      "Гишүүн бүр суралцах хугацаандаа эзэмшиж буй мэргэжлийнхээ дагуу нийгэм болоод хүмүүсийн амьдралд нөлөөлөхүйц төсөл, хөтөлбөрийн нэг хэсэг болж туршлага хуримтлуулж авдаг Монгол улсын мэдээллийн технологийн хамгийн шилдэг клуб болох",
  },
];

const Buttons = [
  {
    description:
      "Discord серверт нэгдэх - Бид онлайнаар болдог бүх үйл ажиллагаа, дотоод чатаа Discord сервер дээр хийдэг ба та энэ хэсэгт бусад гишүүдтэйгээ чөлөөтэй харилцах боломжтой.",
    href: "#",
    title: "Join discord server",
    type: "discord",
  },
  {
    description:
      "Энэ намрын шинээр элсэгчдийн фэйсбүүк бүлгэмд нэгдэх - Энэ бүлгэмд зөвхөн шинэ элсэгчид байх ба шинэ элсэгчтэй холбоотой бүхий л мэдээлэл уг бүлгэмд тавигдана.",
    href: "#",
    title: "Бүлгэмд нэгдэх",
    type: "facebook",
  },
  {
    description:
      "HACKUM клубийн нэгдсэн бүлгэмд нэгдэх - Энэхүү фэйсбүүк бүлгэмд өмнөх төгсөгч, одоо байгаа идэвхтэн гишүүд гээд манай клубтэй холбоотой бүх хүмүүс байдаг тул нийт зарлалыг уг хэсэгт оруулдаг. Тийм учир заавал нэгдээрэй",
    href: "#",
    title: "Нэгдсэн бүлгэмд нэгдэх",
    type: "facebook",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>HACKUM Тавтай морил</title>
        <meta
          name="description"
          content="HACKUM клубийн шинэ элсэгчдэд зориулсан вэб"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.header}>
        <Image className={styles.header} src={Logo} />
      </nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.h1}>ХАКУМ КЛУБД ТАВТАЙ МОРИЛ</h1>
          <p className={styles.p}>
            Юуны өмнө манай клубд нэгдэж, бидний нэг болсон танд баяр хүргэе.
            Таны клубд ороод хамгийн түрүүнд хийх зүйлсийг дарааллаар нь уг вэб
            дээр байршууллаа.
          </p>
          {/* Үндсэн танилцуулга хэсэг */}
          <div>
            {Items.map((item, index) => (
              <>
                <Title key={index} title={item.title} number={index + 1} />
                <Card description={item.description} />
              </>
            ))}
            <Title title="Дотоод журам унших" number={3} />
            <Card description="Клубийнхээ дотоод журамтай заавал сайтар танилцаарай 😄">
              <a href={'https://www.youtube.com/'}>
                <button className={styles.button} >УНШИХ</button>
              </a>
            </Card>

            <Title title="Клубийн бүлгэмүүдэд нэгдэх" number={4} />
            <Card>
              {Buttons.map((button, index) => (
                <div className={styles.box} key={index}>
                  <p className={styles.little}>
                    {index + 1}. {button.description}
                  </p>
                  <Button
                    href={button.href}
                    content={button.title}
                    type={button.type}
                  />
                </div>
              ))}
            </Card>
            <div className={styles.plus}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            <Card className={styles.box}>
              <div>Вэб хөгжүүлсэн:</div>
              <div className={styles.row}>
                <Image src={Avatar1} height={"37px"} width={"37px"} />
                <p>Ариунболд /Core гишүүн/</p>
                <Image src={Avatar} height={"37px"} width={"37px"} />
                <p>Б. Бат-Өлзий</p>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}