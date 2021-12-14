const axios = require("axios");


class EasyBrokerAPI {
  constructor(url) {
    this.url = url;
    this.headers =  {
      "x-authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
  }

  async getTitleList() {
    try {
      const { data } = await this.submitRequest();
      if (!data) throw null;
      return data.content.map(({ title }, index) => {
        return `${index + 1}: ${title}`;
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  async submitRequest() {
    return await axios.get(this.url, {
      headers: this.headers,
    });
  }
}

module.exports = EasyBrokerAPI;
