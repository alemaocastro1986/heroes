import axios from "axios";

console.log(process.env.REACT_APP_API);

const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export { HttpClient };
