import axios from "axios"
import { REGISTER_ENDPOINT } from "../utils/endpoints";

export const registerUser = (name: string, email: string, password: string) => {
    return axios.post(REGISTER_ENDPOINT,{
        name,email,password
    });
}