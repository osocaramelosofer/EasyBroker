const EasyBrokerAPI = require("./class.js");

const config = {
  url: "https://api.stagingeb.com/v1/properties",
  method: "get",
  params: {
    page: 1,
    limit: 20,
  },
  headers: {
    "x-authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  propertieId: null,
};

(async () => {
  const easyBroker = new EasyBrokerAPI(config);
  const titleList = await easyBroker.getTitleList();

  console.log("The Titles are: \n", [...titleList]);
})();

module.exports = config;