import axios from "axios";
import { BASE_URL } from "../utils/constantes";

export const verifyUser =async (email,code)=>{
    try {
        const response =await axios.patch(`${BASE_URL}/usuario/verify`,{
            email:email,
            code:code
        })
        return response.data;
    } catch (error) {
        return alert(error.response.data.errors[0].msg);
    }
}