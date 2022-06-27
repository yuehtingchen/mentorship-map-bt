import {API} from './BaseApi';

const login = async(idtoken, data, options = {"login": true}) => {
  const path = '/user/login/';
  return await API.makePostRequest(path, idtoken, data, options);
};

const getTable = async(accessToken, options={"login": false}) => {
  const path = '/tables/';
  return await API.makeGetRequest(path, accessToken, options);
}

const getSchools = async(accessToken, options={"login": false}) => {
  const path = '/schools/';
  return await API.makeGetRequest(path, accessToken, options);
}

const getSchoolsId = async(accessToken, id, options={"login": false}) => {
  const path = `/schools/${id}/`;
  return await API.makeGetRequest(path, accessToken, options);
}

export default {
    login,
    getTable,
    getSchools,
    getSchoolsId
};