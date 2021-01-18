import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-90982.cloudfunctions.net/api", //When hosted on firebase
  // baseURL: "http://localhost:5001/clone-90982/us-central1/api", // Local dev
});

export default instance;
