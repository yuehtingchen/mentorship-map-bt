import axios from 'axios';

const URI_DOMAIN = "http://127.0.0.1:8000";
const handleResponse = (options, response, jsonResponse) => {
  console.log(response.data);
  return jsonResponse;
};

const handleError = (options, error) => {
  console.log("Error occured: " + error);
  return null;
};

export const API =  {
  getHeaders(accessToken) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
  },

  getLoginHeaders(idToken) {
    return {
      Authorization: idToken,
      'Content-Type': 'application/json'
    };
  },

  makeRequest(path, token, reqInit, option = {}) {
    const headers = option.login ? this.getLoginHeaders(token) : this.getHeaders(token);
    const init = Object.assign({}, reqInit, { headers });
    const url = URI_DOMAIN + path;

    return axios({
      url,
      ...init,
    })
    .then(res => {
      handleResponse(option, res, res.data);
      return res.data;
    })
    .catch(err => {
      handleError(option, err);
      return null;
    })
  },

  async makeGetRequest(path, token, options = {}) {
    const getData = {
      method: 'GET',
    };
    const response = await this.makeRequest(path, token, getData, options);
    return response;
  },

  async makePostRequest(path, token, body, options = {}) {
    const postData = {
      method: 'POST',
      data: body,
    };
    const response = await this.makeRequest(path, token, postData, options);
    return response;
  },
};