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
    href: "https://discord.gg/mWbAYkXv",
    title: "Join discord server",
    type: "discord",
  },
  {
    description:
      "Энэ намрын шинээр элсэгчдийн фэйсбүүк бүлгэмд нэгдэх - Энэ бүлгэмд зөвхөн шинэ элсэгчид байх ба шинэ элсэгчтэй холбоотой бүхий л мэдээлэл уг бүлгэмд тавигдана.",
    href: "https://www.facebook.com/groups/612668670591234/",
    title: "Бүлгэмд нэгдэх",
    type: "facebook",
  },
  {
    description:
      "HACKUM клубийн нэгдсэн бүлгэмд нэгдэх - Энэхүү фэйсбүүк бүлгэмд өмнөх төгсөгч, одоо байгаа идэвхтэн гишүүд гээд манай клубтэй холбоотой бүх хүмүүс байдаг тул нийт зарлалыг уг хэсэгт оруулдаг. Тийм учир заавал нэгдээрэй",
    href: "https://www.facebook.com/groups/hackum/",
    title: "Нэгдсэн бүлгэмд нэгдэх",
    type: "facebook",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Тавтай морил - HACKUM клуб</title>
        <meta
          name="description"
          content="HACKUM клубийн шинэ элсэгчдэд зориулсан вэб"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.header}>
        <Image className={styles.header} src={Logo} alt="Hackum" />
        <p className={styles.hackum}>
          HACKUM
        </p>
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
              <a href="https://drive.google.com/file/d/1iYQHCvPeTP8mxzREwWyXxFZy0Ypw4nLL/view?usp=sharing" target="_blank" rel="noreferrer">
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
            <div className={styles.plus}>Эдгээр үйлдлүүдийг амжилттай хийж дууссан танд баяр хүргэе! Ингээд та HACKUM клубийн нэг хэсэг боллоо. Цаашдын үйл ажиллагааг таны орсон шинэ бүлгэмүүд дээр мэдэгдээд явах тул хоцрохоос болгоомжлоорой. HACKUM | INSPIRE WITH IMAGINATION - Хамтдаа хичээцгээе 💚</div>
            <Card className={styles.box}>
              <div>Вэб хөгжүүлсэн:</div>
              <div className={styles.row}>
                <div className={styles.max}>
                  <Image src={Avatar1} alt="Ariunbold" />
                </div>
                <p>Ариунболд /Core гишүүн/</p>
                <Image className={styles.max} src={Avatar} alt="ulziibox" />
                <p>Б. Бат-Өлзий</p>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}