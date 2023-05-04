// next components
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Script from "next/script";

import CustomListItem from "../components/CustomListItem";
import { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import SubscribeModal from "../components/SubscribeModal";
import { getSortedPostsData } from "../lib/posts";

// images / svgs
import tejPic from "../public/images/tej_patel.png";
import marioPic from "../public/images/salah.png";
import rachealPic from "../public/images/racheal.png";
import UndrawTeaching from "../public/svgs/undraw_educator.svg";
import UndrawChecklist from "../public/svgs/undraw_checklist.svg";
import ReactStars from "react-stars";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next"

export default function Home(props) {
  const { t } = useTranslation();
  const pitchingOfferList = [
    "Help shape the future of education and technology",
    "Join a team of passionate individuals who share your values",
    "Gain valuable experience and skills in tech and education",
    "Be part of a community that values your contributions and supports your growth",
    "Expand your professional network and make meaningful connections",
    "Share your knowledge and expertise with others and learn from them",
    "Receive recognition for your hard work and dedication Feel proud of the work you do and the difference you make",
  ];
  const spanishPitchingOfferList = [
    "Ayuda a dar forma al futuro de la educación y la tecnología",
    "Únete a un equipo de personas apasionadas que comparten tus valores",
    "Obtenga valiosa experiencia y habilidades en tecnología y educación",
    "Sé parte de una comunidad que valora tus aportes y apoya tu crecimiento",
    "Expande tu red profesional y haz conexiones significativas",
    "Comparta su conocimiento y experiencia con otros y aprenda de ellos",
    "Reciba reconocimiento por su arduo trabajo y dedicación Siéntase orgulloso del trabajo que realiza y de la diferencia que marca",
  ];
  const gujuratiPitchingOfferList = [
    "શિક્ષણ અને ટેકનોલોજીના ભવિષ્યને ઘડવામાં મદદ કરો",
    "પ્રખર વ્યક્તિઓની ટીમમાં જોડાઓ જે તમારા મૂલ્યોને શેર કરે છે",
    "ટેક અને શિક્ષણમાં મૂલ્યવાન અનુભવ અને કુશળતા મેળવો",
    "એક સમુદાયનો ભાગ બનો જે તમારા યોગદાનને મહત્ત્વ આપે છે અને તમારી વૃદ્ધિને સમર્થન આપે છે",
    "તમારા વ્યાવસાયિક નેટવર્કને વિસ્તૃત કરો અને અર્થપૂર્ણ જોડાણો બનાવો",
    "તમારું જ્ઞાન અને કુશળતા અન્ય લોકો સાથે શેર કરો અને તેમની પાસેથી શીખો",
    "તમારી મહેનત અને સમર્પણ માટે માન્યતા પ્રાપ્ત કરો તમે જે કામ કરો છો અને તમે જે તફાવત કરો છો તેના પર ગર્વ અનુભવો",
  ];
  const arabicPitchingOfferList = [
    "ساعد في تشكيل مستقبل التعليم والتكنولوجيا",
    "انضم إلى فريق من الأفراد المتحمسين الذين يشاركونك قيمك",
    "اكتساب خبرة ومهارات قيمة في التكنولوجيا والتعليم",
    "كن جزءًا من مجتمع يقدر مساهماتك ويدعم نموك",
    "قم بتوسيع شبكتك المهنية وقم بإجراء اتصالات مفيدة",
    "شارك بمعرفتك وخبراتك مع الآخرين وتعلم منهم",
    "تلقي تقديرًا لعملك الجاد وتفانيك. اشعر بالفخر للعمل الذي تقوم به والفرق الذي تحدثه",
  ];
  const frenchPitchingOfferList = [
    "Contribuez à façonner l'avenir de l'éducation et de la technologie",
    "Joignez-vous à une équipe de passionnés qui partagent vos valeurs",
    "Acquérir une expérience et des compétences précieuses dans le domaine de la technologie et de l'éducation",
    "Faites partie d'une communauté qui valorise vos contributions et soutient votre croissance",
    "Développez votre réseau professionnel et établissez des liens significatifs",
    "Partagez vos connaissances et votre expertise avec les autres et apprenez d'eux",
    "Recevoir une reconnaissance pour votre travail acharné et votre dévouement Être fier du travail que vous faites et de la différence que vous faites",
  ];
  // console.log(process.env.MAILCHIMP_API_KEY);
  return (
    <>
      <NextSeo
        title="MyWebClass | Home"
        description="MyWebClass.org empowers educators to revolutionize teaching and engage students using AI and advanced engineering tools. Join our community to explore the possibilities of AI in the classroom and transform education together."
        canonical="https://www.MyWebClass.org"
        openGraph={{
          url: "https://www.MyWebClass.org",
          title: "MyWebClass | Home",
          description:
            "MyWebClass.org empowers educators to revolutionize teaching and engage students using AI and advanced engineering tools. Join our community to explore the possibilities of AI in the classroom and transform education together.",
          images: [
            {
              url: "https://user-images.githubusercontent.com/114158692/235370839-a16539f4-1b90-4bff-ba2c-40cb2db4a825.png",
              width: 800,
              height: 600,
              alt: "unDraw.co Building Website Image",
            },
          ],
        }}
        twitter={{
          handle: "@MyWebClassSEA",
          site: "@MyWebClass",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>{" "}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div
        className="flex lg:flex-row flex-col-reverse mx-auto items-center justify-between lg:px-6 xl:py-10 py-6 bg-white rounded-lg lg:shadow-2xl dark:bg-gray-800 mt-6"
        style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
      >
        <div className="flex flex-col justify-between lg:pe-4 py-4 ps-4 leading-snug lg:w-2/5 w-100">
          <header className={styles.header}>
            <h1 className="xl:text-5xl text-3xl font-extrabold leading-snug tracking-tight text-gray-900 dark:text-gray-100">
              {t('home:hero')}
            </h1>
          </header>

          <main>
            <p className="text-gray-600 dark:text-gray-400 my-4">
              {t('home:mission')}
            </p>
            <div className="my-4">
              <p className="text-gray-600 dark:text-gray-400">
                {t('home:slogan')}
              </p>
              <a
                href="#learnMore"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {t('home:Learn-more')}
              </a>
              <SubscribeModal
                componentClassName="lg:mt-12 mt-6 text-center"
                btnText={t('home:signup')}
                btnClassName="rounded-md border border-transparent bg-purple-200 px-4 py-2 text-xl inline-flex text-center items-center font-medium text-purple-900 hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
              />
            </div>
          </main>
        </div>
        <UndrawTeaching className="svg object-cover w-3/4 rounded-t-lg" />
      </div>
      <hr className="lg:hidden w-1/2 h-1 mx-auto mb-4 dark:bg-gray-500 border-0 rounded bg-gray-400" />
      <div
        id="learnMore"
        className="flex justify-between gap-4 px-2 lg:flex-row flex-col-reverse mx-auto items-center lg:px-6 xl:py-10 py-6 bg-white rounded-lg lg:shadow-2xl dark:bg-gray-800 mt-6"
        style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
      >
        <div className="flex flex-col lg:w-1/2 lg:pe-4 py-4 ps-4 leading-snug">
          <header className={styles.header}>
            <h1 className="xl:text-4xl text-2xl mb-4 font-extrabold leading-snug tracking-tight text-gray-900 dark:text-gray-100">
              {t('home:future')} MyWebClass.org  
            </h1>
          </header>
          <main>
          <ul className="my-4 max-w-md space-y-1 text-gray-600 dark:text-gray-400 list-inside">
            {
              props.locale == 'fr'
              ?
                  frenchPitchingOfferList.map((listItem, i) => {
                    return <CustomListItem key={i} listContent={listItem} />;
                  })
              :
                props.locale == 'ar'
                ?
                  arabicPitchingOfferList.map((listItem, i) => {
                    return <CustomListItem key={i} listContent={listItem} />;
                  })
                :
                  props.locale == 'es'
                  ?
                    spanishPitchingOfferList.map((listItem, i) => {
                      return <CustomListItem key={i} listContent={listItem} />;
                    })
                  :
                    props.locale == 'gu'
                    ?
                      gujuratiPitchingOfferList.map((listItem, i) => {
                        return <CustomListItem key={i} listContent={listItem} />;
                      })
                    :
                      pitchingOfferList.map((listItem, i) => {
                        return <CustomListItem key={i} listContent={listItem} />;
                      })
            }
            </ul>
          </main>
        </div>
        <div className="w-4/5 text-center">
          <UndrawChecklist
            className="mx-auto rounded-t-lg"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
      <hr className="lg:hidden w-1/2 h-1 mx-auto mb-4 dark:bg-gray-500 border-0 rounded bg-gray-400" />
      <div
        className="flex justify-between gap-4 lg:flex-row flex-col mx-auto items-center xl:py-10 py-6 px-8 lg:px-0"
        style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
      >
        <div className="bg-white rounded-lg shadow-2xl dark:bg-gray-800 mt-6 lg:w-1/3 w-full h-80">
          <div className="flex flex-col items-center pt-10 pb-10">
            <Image
              priority
              src={tejPic}
              className="rounded-full mb-4"
              height={130}
              alt={"Tej Patel"}
            />
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Tej Patel
            </p>
            <span className="text-center text-sm text-gray-500 dark:text-gray-400">
              {t('home:review2')}
            </span>
            <ReactStars edit={false} count={5} size={50} color1={"#ffd700"} />{" "}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl dark:bg-gray-800 mt-6 lg:w-1/3 w-full h-80">
          <div className="flex flex-col items-center pt-10 pb-10">
            <Image
              priority
              src={rachealPic}
              className="rounded-full mb-4"
              height={130}
              alt={"Racheal Fekri"}
            />
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Racheal Fekri
            </p>
            <span className="text-center text-sm text-gray-500 dark:text-gray-400">
              {t('home:review2')}
            </span>
            <ReactStars edit={false} count={5} size={50} color1={"#ffd700"} />{" "}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-2xl dark:bg-gray-800 mt-6 lg:w-1/3 w-full h-80">
          <div className="flex flex-col items-center pt-10 pb-10">
            <Image
              priority
              src={marioPic}
              className="rounded-full mb-4"
              height={130}
              alt={"Mario Salah"}
            />
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Mario Salah
            </p>
            <span className="text-center text-sm text-gray-500 dark:text-gray-400">
              {t('home:review3')}
            </span>
            <ReactStars edit={false} count={5} size={50} color1={"#ffd700"} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({locale}) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
      locale,
      allPostsData,
    },
    revalidate: 1,
  };
}
