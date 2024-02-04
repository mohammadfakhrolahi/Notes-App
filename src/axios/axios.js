import axios from "axios";

const instance = axios.create({
  baseURL: 'https://notes-app-0001-default-rtdb.firebaseio.com/'
})

export default instance