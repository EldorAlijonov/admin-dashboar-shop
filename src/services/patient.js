import axios from "./api";

export const PatientsApi = {
    async patientsPost(data) {
        const response = await axios.post("/patients", data)
        return response.data;
    },
    async patientsGet() {
        const response = await axios.get("/patients",)
        return response.data;
    },
    async patientDlelete(id) {
        const response = await axios.delete(`/patients/${id}`);
        return response.data;
    },
    async getPatientById(id) {
        const response = await axios.get(`/patients/${id}`);
        return response.data;
    },
    async patientPut(id, newData) {
        const response = await axios.put(`/patients/${id}`, newData);
        return response.data;
    }
}