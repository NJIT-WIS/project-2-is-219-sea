import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import Image from "next/image";
import MailChimpLogoDark from "../public/images/MailChimpLogoDark.png";
import MailChimpLogo from "../public/images/MailChimpLogo.png";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SubscribeModal = ({
  componentClassName = "",
  btnText = "Subscribe",
  btnClassName = "",
}) => {
  let [isOpen, setIsOpen] = useState(false);
  let [email, setEmail] = useState("");
  let [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  let [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  // TODO: Aryan, here you would implement mailchimp subscribe
  const inputRef = useRef(null);
  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch("api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };
  // const subscribe = async (email) => {
  //   const response = await subscribe(email);
  // response
  //   .then((_) => {
  //     openSuccessSnackbar(
  //       "Successfully Subscribed to newsletter. Thank you!"
  //     );
  //   })
  //   .catch((e) => {
  //     openErrorSnackbar("Error subscribing. Please try again.");
  //     console.err(e);
  //   });

  // const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // const data = {
  //   email_address: email,
  //   status: "subscribed",
  // };

  // const options = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `api_key ${API_KEY}`,
  //   },
  // };

  //   setErrorSnackbarOpen(true);
  //   // setSuccessSnackbarOpen(true);
  //   closeModal();
  // };

  const handleSuccessSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackbarOpen(false);
  };

  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorSnackbarOpen(false);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className={componentClassName}>
        <button
          type="button"
          onClick={openModal}
          // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          className={btnClassName}
        >
          {btnText}
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Subscribe to our Newsletter!
                  </Dialog.Title>
                  <div className="mt-2" onSubmit={subscribeUser}>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Join our community of innovative educators and discover
                      how to engage and inspire your students like never before.
                      Subscribe to our newsletter today and let's transform
                      education together!
                    </p>
                  </div>{" "}
                  <div className="mt-3 ms-3 me-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <form
                      action="https://github.us21.list-manage.com/subscribe/post?u=06f9e4fc28f032e2928492757&amp;id=eef3a18bfe&amp;f_id=0011b2e1f0"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll">
                        {/* <h2>Subscribe</h2>
                        <div className="indicates-required">
                          <span className="asterisk">*</span> indicates required
                        </div> */}
                        <div className="mc-field-group">
                          {/* <label for="mce-EMAIL">
                            Email Address <span className="asterisk">*</span>
                          </label> */}
                          <input
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@gmail.com"
                            type="email"
                            value={email}
                            name="EMAIL"
                            id="mce-EMAIL"
                            required
                            ref={inputRef}
                          />
                          <span
                            id="mce-EMAIL-HELPERTEXT"
                            className="helper_text"
                          ></span>
                        </div>
                        <div id="mce-responses" className="clear foot">
                          <div
                            className="response"
                            id="mce-error-response"
                            style={{ display: "none" }}
                          ></div>
                          <div
                            className="response"
                            id="mce-success-response"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_06f9e4fc28f032e2928492757_eef3a18bfe"
                            tabIndex="-1"
                            value=""
                          />
                        </div>
                        <div className="optionalParent">
                          <div className="mt-4 flex flex-row justify-center">
                            <input
                              type="submit"
                              value="Subscribe"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              disabled={email.length == 0 ? true : false}
                              className={
                                "mx-2 rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" +
                                (email.length == 0
                                  ? " bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus-visible:ring-gray-800"
                                  : " bg-green-100 text-green-900 hover:bg-green-300 focus-visible:ring-green-500")
                              }
                            />
                            <button
                              type="button"
                              className="mx-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                        <p className="mt-4 flex flex-row justify-center">
                          <a
                            className="font-bold hover:no-underline"
                            href="http://eepurl.com/io5ebI"
                            title="Mailchimp - email marketing made easy and fun"
                          >
                            Powered By &nbsp;
                            <Image
                              fetchPriority="low"
                              src={MailChimpLogoDark}
                              className="hidden dark:inline"
                              style={{ maxWidth: "200px" }}
                              alt="Mail Chimp Dark Logo"
                            />
                            <Image
                              fetchPriority="low"
                              src={MailChimpLogo}
                              className="block dark:hidden inline"
                              style={{ maxWidth: "200px" }}
                              alt="Mail Chimp Logo"
                            />
                          </a>
                        </p>
                      </div>
                    </form>
                    {/* <input
                      value={email}
                      onChange={handleChange}
                      type="email"
                      id="email-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="john.doe@gmail.com"
                      required
                      ref={inputRef}
                    />
                  </div>
                  <div className="mt-4 flex flex-row justify-center">
                    <button
                      type="button"
                      disabled={email.length == 0 ? true : false}
                      className={
                        "mx-2 rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" +
                        (email.length == 0
                          ? " bg-gray-200 dark: dark:bg-gray-700 text-gray-900 dark:text-white focus-visible:ring-gray-800"
                          : " bg-green-100 text-green-900 hover:bg-green-300 focus-visible:ring-green-500")
                      }
                      onClick={subscribeUser}
                    >
                      Subscribe
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>{" "}
      <Snackbar
        open={successSnackbarOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleSuccessSnackbarClose}
      >
        <Alert severity="success">Succssfully subscribed. Thank you!</Alert>
      </Snackbar>
      <Snackbar
        open={errorSnackbarOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleErrorSnackbarClose}
      >
        <Alert severity="error">Error subscribing. Please try again.</Alert>
      </Snackbar>
    </>
  );
};

export default SubscribeModal;
