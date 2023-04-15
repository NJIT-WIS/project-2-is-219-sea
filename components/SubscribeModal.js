import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
// import subscribe from "../pages/api/subscriber";
import axios from "axios";
import Subscribe from "./Subscribe";

export default function SubscribeModal({ btnClassName }) {
  let [isOpen, setIsOpen] = useState(false);
  let [email, setEmail] = useState("");

  const [openSuccessSnackbar, closeSuccessSnackbar] = useSnackbar({
    style: { backgroundColor: "#509B52", color: "black" },
  });
  const [openErrorSnackbar, closeErrorSnackbar] = useSnackbar({
    style: { backgroundColor: "#D84A47", color: "white" },
  });

  const subscribe = async (e) => {
    const API_KEY = MAILCHIMP_API_KEY;
    const API_SERVER = MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = MAILCHIMP_AUDIENCE_ID;

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
    };
  }
  
  // const mailchimpSubscribe = async () => {
  //   // TODO: actually subscribe using mailchimp

  //   const response = await subscribe(email);
  //   response
  //     .then((_) => {
  //       openSuccessSnackbar(
  //         "Successfully Subscribed to newsletter. Thank you!"
  //       );
  //     })
  //     .catch((e) => {
  //       openErrorSnackbar("Error subscribing. Please try again.");
  //       console.err(e);
  //     });

  //   closeModal();
  // };

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
                  <div className="mt-2">
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
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="john.doe@gmail.com"
                      required
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
                      onClick={subscribe}
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
                  <Subscribe></Subscribe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
