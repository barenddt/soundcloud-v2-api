const axios = require("axios");

class SC {
  init(config) {
    this.config = config;
  }

  get(type, params) {
    return new Promise((resolve, reject) => {
      params.client_id = this.config.clientId;
      let urlParameters = Object.entries(params)
        .map(e => e.join("="))
        .join("&");

      axios({
        url: `${
          this.config.host
        }/https://api-v2.soundcloud.com/${type}?${urlParameters}`
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  get(type, params) {
    return new Promise((resolve, reject) => {
      params.client_id = this.config.clientId;
      let urlParameters = Object.entries(params)
        .map(e => e.join("="))
        .join("&");

      axios({
        url: `${
          this.config.host
        }/https://api.soundcloud.com/i1/${type}?${urlParameters}`
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }
}

module.exports = new SC();
