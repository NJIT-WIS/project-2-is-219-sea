// import axios from 'axios'

// const subscribe = async (email) => {
//     const API_KEY = `bd83112203c581db6a6e6d32070281ea-us21`;
//     const API_SERVER = `us21`;
//     const AUDIENCE_ID = `eef3a18bfe`;

//   const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

//   const data = {
//     email_address: email,
//     status: 'subscribed'
//   }

//   const options = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `api_key ${API_KEY}`
//     }
//   }

//   return axios.post(url, JSON.stringify(data), options);

//   try {
//     const response = await axios.post(url, data, options)
//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`
//       })
//     }
//     return res.status(201).json({ message: 'success' })
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({ error: error.message })
//   }
// }
// export default subscribe;
import MailchimpSubscribe from "react-mailchimp-subscribe";

const subscribe = () => {
  const MAILCHIMP_URL =
    "https://github.us21.list-manage.com/subscribe?u=06f9e4fc28f032e2928492757&id=eef3a18bfe";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default subscribe;
