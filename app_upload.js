var axios = require("axios");
var fs = require("fs");
var FormData = require("form-data");

let app_path = "./sample_app/CameraImage-debug.apk";

const formData = new FormData();
const appPath = fs.createReadStream(app_path);

formData.append("file", appPath);
formData.append("custom_id", "cameraApp");

var config = {
  url: "https://api-cloud.browserstack.com/app-automate/upload",
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
  })
  .catch(function (error) {
    console.log(error);
  });
