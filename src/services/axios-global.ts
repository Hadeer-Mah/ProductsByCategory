import axios from "axios";

const Axios = axios.create();
Axios.defaults.baseURL = "https://fakestoreapi.com/";

export default Axios;
