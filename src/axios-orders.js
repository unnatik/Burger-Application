import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-app-68d6b.firebaseio.com/"
});

export default instance;