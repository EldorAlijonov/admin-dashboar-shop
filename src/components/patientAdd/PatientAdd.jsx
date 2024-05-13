import { useEffect, useState } from "react";
import { Button, Flex, Modal, Select } from "antd";
import { HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { TbUserCancel } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import { PatientsApi } from "../../services/patient";
import Message from "../../hooks/Message";
import "./patientadd.scss";
import { useDispatch } from "react-redux";
import { patientPost, patientPut } from "../../redux/patient/patientSlice";
const initialState = {
    firstName: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
}

const PatientAdd = (props) => {
    const { open, onCansel, patientId } = props;
    const { success, error, messageApiContext } = Message();

    const dispatch = useDispatch();

    const [errors, setErrors] = useState(null);
    const [post, setPost] = useState(initialState);
    const onChange = (name, value) => {
        setPost({ ...post, [name]: value });
    }

    const handleForm = async () => {
        if (
            post.firstName === "" ||
            post.age === "" ||
            post.address === "" ||
            post.phone === "" ||
            post.gender === ""
        ) {
            setErrors("Iltimos ma'lumotlarni to'liq kiriting");
            return;
        }
        try {
            if (patientId !== null) {
                const response = await PatientsApi.patientPut(patientId, post);
                dispatch(patientPut(response));
                success("Bemor ma'lumotlari tahrirlandi");
                onCansel();
                clearInput();
            } else {
                const response = await PatientsApi.patientsPost(post);
                dispatch(patientPost(response))
                success("Bemor ma'lumotlari kiritildi");
                onCansel();
                clearInput()

            }

        } catch (err) {
            error("Xatolik yuz berdi");
            setErrors(err.message);
        }
    }



    const getPatientById = async () => {
        try {

            const response = await PatientsApi.getPatientById(patientId);
            setPost(response);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        if (patientId !== null) {
            getPatientById();
        }
    }, [patientId]);


    const clearInput = () => {
        setPost(initialState);
        setErrors(null);
    }

    const onCanselModal = () => {
        setPost(initialState);
        setErrors(null);
        setTimeout(() => {
            onCansel();
        }, 10);
    }

    return (
        <>
            {messageApiContext}
            <Modal
                open={open}
                footer={false}
                title={patientId ? "Edit Patient" : "Add A Patient"}
                className="patientAdd"
                closeIcon={false}
            >
                <form>
                    <div className="formInput">
                        <div className="inputItem">
                            <label htmlFor="firstName">Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={post.firstName}
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                            />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="age">Age</label>
                            <input
                                type="text"
                                name="age"
                                id="age"
                                value={post.age}
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="formInput">
                        <div className="inputItem">
                            <label htmlFor="gender">Gender</label>
                            <Select
                                onChange={(value) => onChange("gender", value)}
                                value={post.gender}
                                name="gender"
                                defaultValue="Select"
                                id="gender"
                                options={[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                ]}
                            />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={post.phone}
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="formInput">
                        <div className="inputItem">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={post.address}
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="formErrors">{errors}</div>
                    <div className="formButton">
                        <Button
                            onClick={clearInput}
                            className="clear"
                            type="text"
                            icon={<AiOutlineClear size={15} />}
                        >
                            Clear
                        </Button>
                        <Flex gap={20}>
                            <Button
                                type="text"
                                className="cancel"
                                icon={<TbUserCancel size={15} />}
                                onClick={onCanselModal}
                            >
                                Cancel
                            </Button>
                            {patientId ? (
                                <Button
                                    type="text"
                                    className="add"
                                    icon={<FaUserEdit size={15} />}
                                    onClick={handleForm}
                                >
                                    Edit
                                </Button>
                            ) : (
                                <Button
                                    type="text"
                                    className="add"
                                    onClick={handleForm}
                                    icon={<HiOutlineUserAdd size={15} />}
                                >
                                    Add
                                </Button>
                            )}
                        </Flex>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default PatientAdd;
