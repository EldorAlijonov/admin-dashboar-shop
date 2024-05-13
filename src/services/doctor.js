import axios from "./api";

export const DoctorApi = {
    async doctorPost(data) {
        const response = await axios.post("/doctors", data)
        return response.data;
    },
    async doctorsGet() {
        const response = await axios.get("/doctors",)
        return response.data;
    },
    async doctorDlelete(id) {
        const response = await axios.delete(`/doctors/${id}`);
        return response.data;
    },
    async getDoctorById(id) {
        const response = await axios.get(`/doctors/${id}`);
        return response.data;
    },
    async doctorPut(id, newData) {
        const response = await axios.put(`/doctors/${id}`, newData);
        return response.data;
    }
}