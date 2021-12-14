const EasyBrokerAPI = require("./class.js");

(async () => {
  const easyBroker = new EasyBrokerAPI("https://api.stagingeb.com/v1/properties");
  const titleList = await easyBroker.getTitleList();

  console.log("The Titles are: \n", [...titleList]);
})();
