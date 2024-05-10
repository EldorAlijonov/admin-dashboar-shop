import "./patientEdit.scss";
import { Button, Modal, Select } from "antd";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { TbUserCancel } from "react-icons/tb";
const PatientEdit = (props) => {
    const { openEdit, setOpenEdit } = props;
    const handleChange = (value) => {
        console.log(` ${value}`);
    };


    const onCensel = () => {
        setOpenEdit(false);
    }
    return (
        <Modal open={openEdit} footer={false} title={"Edit Patient"} className="patientEdit" closeIcon={false}>
            <form>
                <div className="formInput">
                    <div className="inputItem">
                        <label htmlFor="">
                            Name
                        </label>
                        <input type="text" />
                    </div>
                    <div className="inputItem">
                        <label htmlFor="">
                            Age
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <div className="formInput">
                    <div className="inputItem">
                        <label htmlFor="">
                            Gender
                        </label>
                        <Select
                            defaultValue="Select"
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'male',
                                    label: 'Male',
                                },
                                {
                                    value: 'famale',
                                    label: 'Famale',
                                },
                            ]}
                        />
                    </div>
                    <div className="inputItem">
                        <label htmlFor="">
                            Phone
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <div className="formInput">
                    <div className="inputItem">
                        <label htmlFor="">
                            Address
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <div className="formButton">
                    <Button className="cancel" icon={<TbUserCancel size={15} />}
                        onClick={onCensel}
                    >Cancel</Button>
                    <Button className="add" icon={<FaUserEdit size={15} />}>Edit</Button>
                    <Button className="clear" icon={<AiOutlineClear size={15} />}>Clear</Button>
                </div>
            </form>
        </Modal>
    );
}

export default PatientEdit;