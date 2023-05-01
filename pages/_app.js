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
  <div class="relative w-full max-w-lg shadow-2xl" style="height: fit-content;">
      <!-- Modal content -->
      <div class="relative  bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-5 border-b rounded-t border-gray-300 dark:border-gray-600">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Privacy Policy
              </h3>
              <button type="button" id="closeModalButton" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
              </button>
          </div>
          <!-- Modal body -->
          <div class="p-5 space-y-5">
            <p class="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              We take your privacy seriously. Please take a moment to carefully review our privacy policy on MyWebClass.org.
              <button id="readMoreButton" type="button" class="text-blue-600 background-transparent font-bold uppercase outline-none">Read More</button>
            </p>
            <p class="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Do you agree to our Privacy Policy?
            </p>
          </div>
          <!-- Modal footer -->
          <div class="flex justify-end items-center p-3 space-x-2 border-t border-gray-300 rounded-b dark:border-gray-600">
            <button id="agreeButton" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
            <button id="disagreeButton" type="button" class="text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
          </div>
      </div>
  </div>
</div>
  `;

  // Append the modal HTML to the body of the document
  document.body.insertAdjacentHTML("beforeend", modalHtml);
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
    const privacyModal = new Modal(document.getElementById("modalEl"), {
      placement: "top-center",
    });

    // Check if the user has already agreed to the policy
    const agreed = localStorage.getItem("privacyPolicyAgreed") === "true";
    if (!agreed) {
      // Show the modal if the user hasn't agreed
      privacyModal.show();
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

    // Handle the click event on the Disagree button
    const disagreeButton = document.getElementById("disagreeButton");
    disagreeButton.addEventListener("click", () => {
      // Remember the user's choice
      localStorage.setItem("privacyPolicyAgreed", "false");
      // Hide the modal
      privacyModal.hide();
      // Deny Google Analytics tracking
      gtag("consent", "update", {
        analytics_storage: "denied",
      });
    });

    // handling closing the modal
    const closeModalButton = document.getElementById("closeModalButton");
    closeModalButton.addEventListener("click", () => {
      privacyModal.hide();
    });
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
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}
