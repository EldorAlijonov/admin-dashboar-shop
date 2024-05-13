import { useDispatch, useSelector } from "react-redux";
import { Widget } from "../../components";
import "./home.scss";
import { PatientsApi } from "../../services/patient";
import { useEffect } from "react";
import { patientCount } from "../../redux/slice/patientSlice";
import { DoctorApi } from "../../services/doctor";
import { doctorCount } from "../../redux/slice/doctorSlice";

const Home = () => {
    const { patientCounter, patientUpdata, patientAdd } = useSelector((state) => state.patient);
    const { doctorAdd, doctorUpdata, doctorCounter } = useSelector((state) => state.doctor);
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const response = await PatientsApi.patientsGet();
            dispatch(patientCount(response.length))
        } catch (err) {
            console.log(err);
        }
    }
    const fetchDataDoctor = async () => {
        try {
            const response = await DoctorApi.doctorsGet();
            dispatch(doctorCount(response.length))
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [patientUpdata, patientAdd]);
    useEffect(() => {
        fetchDataDoctor();
    }, [doctorAdd, doctorUpdata]);
    return (
        <div className="home ">
            <div className="homeContainer">
                <div className="widgets">
                    <Widget title={"Number Of Patients"} count={patientCounter} />
                    <Widget title="Number Of Doctor" count={doctorCounter} />
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    );
}

export default Home;