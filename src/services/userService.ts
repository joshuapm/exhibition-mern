import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = "http://localhost:8080/api/";

export function patchFavoriteCharacter(characterId: string) {
    return axios
        .patch(`${API_URL}user`, { characterId }, { headers: authHeader() })
        .then((response) => {
            debugger
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        });
}