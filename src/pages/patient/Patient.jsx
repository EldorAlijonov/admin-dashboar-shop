import "./patient.scss";
import { Button, Flex } from "antd";
import { HiOutlineUserAdd } from "react-icons/hi";
import { Delete, PatientAdd, PatientTable } from "../../components";
import { useEffect, useState } from "react";
import { PatientsApi } from "../../services/patient";
import { FaUserEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Message from "../../hooks/Message";

const Patient = () => {
    const { patientAdd, patientUpdata } = useSelector((state) => state.patient);
    const { success, error, messageApiContext } = Message();

    const [selectPatientId, setSelectPatientId] = useState(null);
    const columns = [
        {
            title: "№",
            render: (text, record, index) => {
                return index + 1;
            }
        },
        {
            title: 'Name',
            dataIndex: 'firstName',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: "Date",
            dataIndex: "createdAt",
            render: (text, record) => {
                const date = new Date(record.createdAt);
                const formattedDate = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
                return formattedDate;
            }
        },
        {
            title: 'Actions',
            render: (text, record) => (
                <Flex gap={30} justify="center">
                    <Button
                        type="text"
                        onClick={() => {
                            setOpen(true);
                            setSelectPatientId(record._id);
                        }} className="edit"
                        icon={<FaUserEdit size={20} />} />
                    <Button type="text" onClick={() => openDeleteModal(record._id)} className="delete"
                        icon={<FaRegTrashAlt size={20} />} />
                </Flex>
            ),
        }
    ];

    const [getData, setGetData] = useState([]);
    const [open, setOpen] = useState(false);
    const fetchData = async () => {
        try {
            const response = await PatientsApi.patientsGet();
            setGetData(response);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [patientUpdata, patientAdd]);

    const getDataWithKey = getData.map((item, index) => ({
        ...item,
        key: index,
    }));



    const onCansel = () => {
        setSelectPatientId(null);
        setOpen(false);
    }
    const [deletOpenModal, setDeletOpenModal] = useState(false);
    const [selectedPatientId, setSelectedPatientId] = useState(null);

    const openDeleteModal = (id) => {
        setSelectedPatientId(id);
        setDeletOpenModal(true);
    };

    const handleCancelDelete = () => {
        setSelectedPatientId(null)
        setDeletOpenModal(false);
    };

    const handleDelete = async () => {
        try {
            await PatientsApi.patientDlelete(selectedPatientId);
            success("Ma'lumotlar o'chirildi!");
            setDeletOpenModal(false);
            fetchData();
        } catch (err) {
            console.error("O'chirishda xatolik:", err);
            error("Malumotlar o'chirilmadi!")
            setDeletOpenModal(false);
        }
    };



    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (value) => {
        const filteredPatients = getData.filter(patient =>
            patient.firstName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filteredPatients);
    };
    return (

        <>
            {messageApiContext}
            <div className="patient">
                <div className="patientContainer">
                    <div className="top">
                        <h1 className="title">
                            Pateints
                        </h1>
                        <Button
                            onClick={() => setOpen({
                                isOpen: true,
                            })}
                            icon={<HiOutlineUserAdd size={20} />}
                            type="text">Add Patient</Button>
                    </div>
                    <PatientTable data={filteredData.length > 0 ? filteredData : getDataWithKey} columns={columns} search={handleSearch} />
                    <Delete open={deletOpenModal} clickCancel={handleCancelDelete} clickDelete={handleDelete} />
                    <PatientAdd open={open} onCansel={onCansel} patientId={selectPatientId} />
                </div>
            </div>
        </>
    );
}

export default Patient;