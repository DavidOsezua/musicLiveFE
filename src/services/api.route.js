import axios from "axios";
const URL = "https://findmelivemusic.com:3000";

export const api = axios.create({
  baseURL: URL,
});

export const Url = URL;
