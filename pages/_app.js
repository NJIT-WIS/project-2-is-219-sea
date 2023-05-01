import "../styles/global.css";
import "../styles/tailwind.css";
import "../styles/prism.css";

// next components
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// node packages
import { ThemeProvider } from "next-themes";
import { Modal } from "flowbite";

// components
import PageWrapper from "../components/PageWrapper";

// Scripts
import Script from "next/script";

// others
import siteMetadata from "../data/siteMetadata";

function createPrivacyModal() {
  const modalHtml = `
  <div id="modalEl" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative w-full max-w-lg shadow-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative  bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-5 border-b rounded-t border-gray-300 dark:border-gray-600">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Privacy Policy (GDPR)
              </h3>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-between p-6 space-x-2 border-t border-gray-300 rounded-b dark:border-gray-600">
            <div class="flex flex-row gap-4 justify-between">
              <button id="agreeButton" data-modal-hide="medium-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button id="disagreeButton" data-modal-hide="medium-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div
            <div class="flex flex-row justify-between">
              <button id="readMoreButton" data-modal-hide="medium-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Read More</button>
            </div
          </div>
      </div>
  </div>
</div>
  `;

  // Append the modal HTML to the body of the document
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function initializePrivacyModal() {
  const privacyModal = new Modal(document.getElementById("modalEl"), {
    placement: "top-center",
  });

  // Check if the user has already agreed to the policy
  const agreed = localStorage.getItem("privacyPolicyAgreed") === "true";
  if (!agreed) {
    // Show the modal if the user hasn't agreed
    privacyModal.show();
    console.log(privacyModal);
  }

  // Handle the click event on the Agree button
  const agreeButton = document.getElementById("agreeButton");
  agreeButton.addEventListener("click", () => {
    // Remember the user's choice
    localStorage.setItem("privacyPolicyAgreed", "true");
    // Hide the modal
    privacyModal.hide();
    // Enable Google Analytics tracking
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  });
  const disagreeButton = document.getElementById("disagreeButton");
  disagreeButton.addEventListener("click", () => {
    // Remember the user's choice
    localStorage.setItem("privacyPolicyAgreed", "false");
    // Hide the modal
    privacyModal.hide();
    // Enable Google Analytics tracking
    gtag("consent", "update", {
      analytics_storage: "denied",
    });
  });
}

function loadGoogleAnalytics() {
  // Replace "GA_MEASUREMENT_ID" with your Google Analytics Measurement ID
  const gaMeasurementId = "G-5SSGVXH7NY";

  // Load the Google Analytics tracking code
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize Google Analytics tracking
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", gaMeasurementId, { anonymize_ip: true });

  // Check if the user has provided consent for Google Analytics tracking
  const consent = localStorage.getItem("googleAnalyticsConsent");
  if (consent === "granted") {
    // Enable Google Analytics tracking if consent has been granted
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  } else if (consent === "denied") {
    // Disable Google Analytics tracking if consent has been denied
    gtag("consent", "update", {
      analytics_storage: "denied",
    });
  } else {
    // Show the privacy modal if no consent has been given
    initializePrivacyModal();
  }
}

export default function App({ Component, pageProps }) {
  const { push } = useRouter();
  useEffect(() => {
    createPrivacyModal();
    const readMoreButton = document.getElementById("readMoreButton");
    readMoreButton.addEventListener("click", () => {
      push("/privacy");
    });

    loadGoogleAnalytics();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Script
        strategy="lazyOnload"
        // id = G-QKD03YMMCM
        src={`https://www.googletagmanager.com/gtag/js?id=G-QKD03YMMCM`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QKD03YMMCM');
          `}
      </Script>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}
