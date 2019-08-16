const fetch = require("cross-fetch");

class SC {
  init(clientId) {
    this.clientId = clientId;
  }

  get(type, params) {
    return new Promise(resolve => {
      params.client_id = this.clientId;
      let urlParameters = Object.entries(params)
        .map(e => e.join("="))
        .join("&");

      let url = `https://api-v2.soundcloud.com${type}?${urlParameters}`;

      fetch(url).then(res => resolve(res.json()));
    });
  }
}

module.exports = new SC();
