import axios from "axios";
import jwt_decode from "jwt-decode";

import { Storage } from "utils";
import { URL } from "constants";

const API = axios.create({
  baseURL: URL,
  timeout: 10000,
  responseType: "json",
  headers: { "Content-Type": "application/json" },
});

//This function is used to get the new access token and refresh token and set it in localStorage.
const refreshToken = async () => {
  try {
    const resToken = await Storage.get("refreshToken");
    const { data } = await axios.post(URL + "/refresh", {
      token: resToken,
    });
    //set the refresh token and access token in the localStorage
    Storage.setTokens(data.refreshToken, data.accessToken);
    return data;
  } catch (error) {
    return error;
  }
};

// Added for request interceptor
API.interceptors.request.use(
  async (config) => {
    const token = await Storage.get("token");
    if (token) {
      const currentDate = new Date();
      const decodeToken = jwt_decode(token);
      //Check for token expiring or not
      if (decodeToken.exp * 1000 < currentDate.getTime()) {
        // If token expire then get the new access token
        let res = await refreshToken();
        if (!res.accessToken) {
          return Promise.reject(res);
        }
        config.headers.Authorization = "Bearer " + res.accessToken;
      } else {
        // If token not expire then set the token
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
