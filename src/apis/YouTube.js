import axios from "axios";

const key = "AIzaSyCBMRdNcL-rtGqk1shBf5ILtSuBDmLC4wQ";
// https://www.googleapis.com/youtube/v3/search

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

instance.interceptors.request.use((config) => {
  config.params = {
    // add your default ones
    part: "snippet",
    maxResults: 5,
    key,
    // spread the request's params
    ...config.params,
  };
  return config;
});

export default instance;
