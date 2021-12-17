var axios = require("axios");
var fs = require("fs");
var FormData = require("form-data");

let media_path = "./sample_image/bstack.jpg";

const formData = new FormData();
const mediaPath = fs.createReadStream(media_path);

formData.append("file", mediaPath);
formData.append("custom_id", "sampleMedia");

var config = {
  url: "https://api-cloud.browserstack.com/app-automate/upload-media",
  method: "post",
  headers: formData.getHeaders(),
  auth: {
    username: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
    password: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
  },

  data: formData,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data.app_url;
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = { axiosTest };
