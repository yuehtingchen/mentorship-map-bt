import API from './BaseAPI';

export default {
    login(key, data, options = {}) {
      const path = '/createItems.json';
      API.makePostRequest(path, key, data, options);
    },
  };