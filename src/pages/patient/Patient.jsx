import { Button } from "antd";
import { HiOutlineUserAdd } from "react-icons/hi";
import "./patient.scss";
import { Delete, PaitentEdit, PatientAdd, PatientTable } from "../../components";
import { useState } from "react";

const Patient = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    return (

        <div className="patient">
            <div className="patientContainer">
                <div className="top">
                    <h1 className="title">
                        Pateints
                    </h1>
                    <Button
                        icon={<HiOutlineUserAdd size={20} />}
                        onClick={() => setOpen(!open)}
                        type="text">Add Patient</Button>
                </div>
                <PatientTable />
                <PatientAdd open={open} setOpen={setOpen} />
                <PaitentEdit openEdit={openEdit} setOpenEdit={setOpenEdit} />
                <Delete />
            </div>
        </div>
    );
}

export default Patient;