const axios = require("axios");

class EasyBrokerAPI {
  constructor({ url, method, params, propertieId, headers }) {
    this.url = url;
    this.method = method;
    this.params = params;
    this.propertieId = propertieId;
    this.headers = headers;
  }

  createUrl() {
    let url = this.url;

    if (this.propertieId) {
      url = `${url}/${this.propertieId}`;
    }

    if (this.params) {
      url += "?";

      const params = Object.entries(this.params);
      url = params.reduce((acc, [key, value], index) => {
        const isAnd = index == params.length - 1 ? "" : "&";
        return `${acc}${key}=${value}${isAnd}`;
      }, url);
    }

    this.url = url;
  }

  async getTitleList() {
    this.createUrl();
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
    return await axios[this.method](this.url, {
      headers: this.headers,
    });
  }
}

module.exports = EasyBrokerAPI;
