import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "3670bfa5bfmsh82ec41d9e3d839cp116cd9jsnffa2a2404e16",
    },
  });
  return data;
};
