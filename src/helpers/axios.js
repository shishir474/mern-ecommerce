import axios from "axios";
import { api } from "../urlconfig";

const axiosInstance = axios.create({
    baseURL: api
})

export default axiosInstance;