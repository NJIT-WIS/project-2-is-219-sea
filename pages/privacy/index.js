import UndrawPrivacy from "../../public/svgs/undraw_privacy.svg";

const Privacy = () => {
  return (
    <div
      className="flex flex-col mx-auto items-center justify-between lg:px-6 xl:py-16 py-6 bg-white rounded-lg lg:shadow-2xl dark:bg-gray-800 mt-6"
      style={{ maxWidth: "1500px" }}
    >
      <UndrawPrivacy
        className="svg"
        style={{ maxWidth: "1000px", maxHeight: "500px" }}
      />
      <div className="p-6">
        <h2 className="text-3xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-5xl sm:truncate mb-4">
          Privacy
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We care about your privacy! At MyWebClass, we are committed to
          protecting your privacy. This privacy policy explains how we collect
          and use your personal information and what rights you have in relation
          to this information.
        </p>
        <h3 className="text-xl sm:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
          Information We Collect
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We collect personal information that you voluntarily provide to us,
          such as your name, email address, and other contact information. We
          may also collect information about how you use our website, such as
          your IP address, browser type, and operating system.
        </p>
        <h3 className="text-xl sm:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
          How We Use Your Information
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We use your personal information to communicate with you about our
          services and to improve our website. We may also use your information
          to send you promotional materials or other information that we think
          may be of interest to you.
        </p>
        <h3 className="text-xl sm:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
          How We Share Your Information
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          We do not sell, rent, or share your personal information with third
          parties, except as required by law or as necessary to provide our
          services to you. We take appropriate measures to protect your personal
          information from unauthorized access, disclosure, or use. However, no
          data transmission over the internet can be guaranteed to be 100%
          secure.
        </p>{" "}
        <h3 className="text-xl sm:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
          Your Rights
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          You have the right to access, update, and delete your personal
          information. You also have the right to opt-out of receiving
          promotional materials from us.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
