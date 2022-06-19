const processResponse = (res) => {
  if (isInvalidToken(res)) {
    return { data: {} };
  }

  if (res.status === NO_CONTENT) {
    const response = Object.assign({}, res, { data: {} });
    return response;
  }
  return res;
};

const handleResponse = (options, response, jsonResponse) => {
  const jsonRes = _.isEmpty(jsonResponse) ? {} : jsonResponse;
  const { status } = response;
  const { errors } = Object.assign({}, jsonRes);
  const resp = {
    status,
    body: jsonResponse,
    errors,
    headers: response.headers,
  };
};

const API = {
  getHeaders(accessToken) {
    return {
      Accept: accept,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
  },

  makeRequest(path, reqInit, option = {}) {
    const headers = this.getHeaders(accessToken);
    const option = option
    const init = Object.assign({}, reqInit, { headers });
    axios({
      url,
      ...init,
    })
      .then(res => {
        handleResponse(option, res, res.data);
      })
      .catch((err) => {
        handleError(option, res, res.data)
      });
  },

  makeGetRequest(path, queryParams, options = {}) {
    const getData = {
      method: 'GET',
      params: this.getParams(queryParams),
      paramsSerializer: (params) => {
        return qs.stringify(sanitizeParams(params), { arrayFormat: 'brackets' });
      },
    };
    this.makeRequest(path, getData, options);
  },

  makePostRequest(path, body, options = {}) {
    const postData = {
      method: 'POST',
      data: body,
      params: this.getParams(),
      paramsSerializer: (params) => {
        return qs.stringify(sanitizeParams(params), { arrayFormat: 'brackets' });
      },
    };
    this.makeRequest(path, postData, options);
  },

  makeLoginRequest(path, body, options = {}) {
    
  },
  
  config,
};