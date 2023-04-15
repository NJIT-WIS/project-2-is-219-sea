import axios from "axios";

const subscribe = async (email) => {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

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

  return axios.post(url, JSON.stringify(data), options);

  // try {
  //   const response = await axios.post(url, data, options);
  //   if (response.status >= 400) {
  //     return {
  //       error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`,
  //     };
  //   }
  //   return { message: "success" };
  // } catch (error) {
  //   console.log(error);
  //   return { error: error.message };
  // }
};

export default subscribe;
