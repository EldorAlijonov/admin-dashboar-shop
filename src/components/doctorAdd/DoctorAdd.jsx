import "./doctorAdd.scss";
import { useEffect, useState } from "react";
import { Button, Flex, Modal, Select } from "antd";
import { HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { TbUserCancel } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import Message from "../../hooks/Message";
import { useDispatch, useSeletor } from "react-redux";
import { DoctorApi } from "../../services/doctor";
import { doctorPost, doctorPut } from "../../redux/slice/doctorSlice";
const initialState = {
    firstName: "",
    age: "",
    phone: "",
}
const DoctorAdd = (props) => {
    const { open, onCansel, doctorId = null } = props;
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
            post.phone === ""
        ) {
            setErrors("Iltimos ma'lumotlarni to'liq kiriting");
            return;
        }
        try {
            if (doctorId !== null) {
                const response = await DoctorApi.doctorPut(doctorId, post);
                dispatch(doctorPut(response));
                success("Doctor add");
                onCansel();
                clearInput();
            } else {
                const response = await DoctorApi.doctorPost(post);
                dispatch(doctorPost(response))
                success("Doctor Not add");
                onCansel();
                clearInput()

            }

        } catch (err) {
            error("Xatolik yuz berdi");
            setErrors(err.message);
        }
    }



    const getDoctorById = async () => {
        try {

            const response = await DoctorApi.getDoctorById(doctorId);
            setPost(response);
        } catch (err) {
        }
    }
    useEffect(() => {
        if (doctorId !== null) {
            getDoctorById();
        }
    }, [doctorId]);


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
                title={doctorId ? "Edit Doctor" : "Add A Doctor"}
                className="doctorAdd"
                closeIcon={false}
            >
                <form>
                    <div className="formInput">
                        <div className="inputItem">
                            <label htmlFor="firstName">Full Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={post.firstName}
                                onChange={(e) => onChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="formInput">
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
                            {doctorId ? (
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

export default DoctorAdd;