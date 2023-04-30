import UndrawTeam from "../../public/svgs/undraw_team_goals.svg";
import { NextSeo } from "next-seo";

const About = () => {
  return (
    <>
      <NextSeo
        title="MyWebClass | About"
        description="At MyWebClass.org, we are a passionate team using tech for a better world. We promise high-quality educational content to help you succeed in the digital and AI age."
        canonical="https://www.MyWebClass.org"
        openGraph={{
          url: "https://www.MyWebClass.org",
          title: "MyWebClass | About",
          description:
            "At MyWebClass.org, we are a passionate team using tech for a better world. We promise high-quality educational content to help you succeed in the digital and AI age.",
          images: [
            {
              url: "https://user-images.githubusercontent.com/114158692/235372409-dc622e5b-f1ea-4194-b916-b315ff8449e5.png",
              width: 800,
              height: 600,
              alt: "unDraw.co About Page Image",
            },
          ],
        }}
        twitter={{
          handle: "@MyWebClassSEA",
          site: "@MyWebClass",
          cardType: "summary_large_image",
        }}
      />
      <div
        className="flex flex-col mx-auto items-center justify-between lg:px-6 xl:py-8 py-6 bg-white rounded-lg lg:shadow-2xl dark:bg-gray-800 mt-6"
        style={{ maxWidth: "1500px" }}
      >
        <UndrawTeam className="svg" style={{ maxWidth: "1000px" }} />
        <div className="p-6">
          <h2 className="text-3xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-5xl sm:truncate mb-4">
            About Us
          </h2>
          <h3 className="text-xl sm:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
            Who We Are
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We are a team of young and talented developers, designers, and
            entrepreneurs who are passionate about technology and its impact on
            society. Our team consists of individuals from diverse backgrounds,
            united by a common vision of using technology to create a better
            world.
          </p>
          <h3 className="text-xl sm:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
            What We Do
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            MyWebClass is a website that aims to make learning about technology
            more accessible and engaging for everyone. Our platform offers a
            wide range of courses, tutorials, and resources on various topics
            such as web development, artificial intelligence, and cybersecurity.
            We believe that by providing high-quality educational content, we
            can help people acquire the skills and knowledge they need to
            succeed in the digital age.
          </p>
          <h3 className="text-xl sm:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our mission is to revolutionize technology by empowering people with
            the knowledge and skills they need to thrive in the digital age. We
            believe that everyone should have the opportunity to learn and grow,
            regardless of their background or circumstances. That's why we're
            committed to making MyWebClass a platform that is inclusive,
            diverse, and equitable for all.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
