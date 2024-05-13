import axios from "./api";

export const LoginApi = {
    async loginAdmin(data) {
        const response = await axios.post("/login/admin", data)
        return response.data;
    },

}