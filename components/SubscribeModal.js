import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRef } from 'react';

export default function SubscribeModal({ btnClassName }) {
  let [isOpen, setIsOpen] = useState(false);
  let [email, setEmail] = useState("");
  let [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  let [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  // TODO: Aryan, here you would implement mailchimp subscribe
  const inputRef = useRef(null);
  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('project-2-is-219-sea/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
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
      <div className={btnClassName}>
        <button
          type="button"
          onClick={openModal}
          className="mx-2 rounded-md border border-transparent bg-purple-200 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
        >
          Sign me up &#8594;
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
                  <div className="m-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
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
                    </button>
                    <button
                      type="button"
                      className="mx-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
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
}
