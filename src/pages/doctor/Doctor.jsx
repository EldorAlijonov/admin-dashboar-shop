import { Button, Flex } from "antd";
import "./doctor.scss";
import { HiOutlineUserAdd } from "react-icons/hi";
import { Delete, DoctorAdd, DoctorTable } from "../../components";
import { useEffect, useState } from "react";
import { DoctorApi } from "../../services/doctor";
import { FaRegTrashAlt, FaUserEdit } from "react-icons/fa";
import Message from "../../hooks/Message";
import { useSelector } from "react-redux";
const Doctor = () => {
    const [open, setOpen] = useState(false);
    const { success, error, messageApiContext } = Message();
    const [selectDoctorId, setSelectDoctorId] = useState(null);
    const { doctorAdd, doctorUpdata } = useSelector((state) => state.doctor);

    const columns = [
        {
            title: "№",
            render: (text, record, index) => {
                return index + 1;
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'firstName',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },

        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: "Role",
            dataIndex: "role"
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
            render: (text, record) => (
                <Flex gap={30} justify="center">
                    <Button
                        type="text"
                        onClick={() => {
                            setOpen(true);
                            setSelectDoctorId(record._id);
                        }} className="edit"
                        icon={<FaUserEdit size={20} />} />
                    <Button type="text"
                        onClick={() => openDeleteModal(record._id)}

                        className="delete"
                        icon={<FaRegTrashAlt size={20} />} />
                </Flex>
            ),
        },

    ];

    const [getData, setGetData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await DoctorApi.doctorsGet();
            setGetData(response);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [doctorAdd, doctorUpdata]);

    const getDataWithKey = getData.map((item, index) => ({
        ...item,
        key: index,
    }));


    const onCansel = () => {
        setSelectDoctorId(null);
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
            await DoctorApi.doctorDlelete(selectedPatientId);
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
    }

    return (
        <>
            {messageApiContext}
            <div className="doctor">
                <div className="doctorContainer">
                    <div className="top">
                        <h1 className="title">Doctors</h1>
                        <Button
                            icon={<HiOutlineUserAdd size={20} />}
                            type="text"
                            onClick={() => setOpen(true)}
                        >
                            Add Doctor
                        </Button>
                    </div>
                    <div className="center">
                        <Delete open={deletOpenModal} clickCancel={handleCancelDelete} clickDelete={handleDelete} />
                        <DoctorTable columns={columns} data={filteredData.length > 0 ? filteredData : getDataWithKey} search={handleSearch} />
                        <DoctorAdd open={open} onCansel={onCansel} doctorId={selectDoctorId} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Doctor;