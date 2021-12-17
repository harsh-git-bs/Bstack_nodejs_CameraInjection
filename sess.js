var axios = require("axios");

var config = {
  method: "put",
  url: "https://api-cloud.browserstack.com/app-automate/sessions/864f61e84bfe65a76ab69074412632502a7dd603.json",
  auth: {
    username: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
    password: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
  },
  data: {
    status: "passed",
    reason: "Image captured Successfully!!",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
