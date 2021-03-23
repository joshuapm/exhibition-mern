import axios from "axios";
import authHeader from "../utils/authHeader"

const API_URL = "http://localhost:8080/api/";

export function getCharactersList(page: number) {
  return axios
    .get(`${API_URL}character/?page=${page.toString()}`, { headers: authHeader() })
    .then((response) => {

      return response.data;
    });
}

