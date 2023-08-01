import axios from "axios";

const apiKey = "6461338093b5b80e9d166d2129ba16a8";
const url = "http://api.themoviedb.org/3/";

export const fetch = async (typeUrl, id) => {
  try {
    const res = await axios.get(url + typeUrl + id, {
      params: { api_key: apiKey, language: "en_US" },
    });
    return res;
  } catch (error) {}
};

export const search = async (query, searchUrl) => {
  try {
    const res = await axios.get(url + searchUrl, {
      params: { query: query, api_key: apiKey, language: "en_US" },
    });
    return res;
  } catch (error) {}
};
