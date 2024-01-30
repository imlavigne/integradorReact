import axios from "axios";
import { BASE_URL } from "../utils/constantes";

export const createUser = async (nombre, email, password,cellphone) => {
    // console.log(`nombre:${nombre}, email:${email},password:${password},cel:${cellphone}`)
    try {
       const response = await axios.post(`${BASE_URL}/usuario/registro`, {
      
        nombre,
        email,
        password,
        cellphone,
      });

  
      return response.data;
    } catch (error) {
      return alert(error.response.data.errors[0].msg);
    }
  };