import "./patientadd.scss";
import { Button, Modal, Select } from "antd";
import { HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { TbUserCancel } from "react-icons/tb";
const PatientAdd = (props) => {
    const { open, setOpen } = props;
    const handleChange = (value) => {
        console.log(` ${value}`);
    };


    const onCensel = () => {
        setOpen(false);
    }
    return (
        <Modal open={open} footer={false} title={"Add Patient"} className="patientAdd" closeIcon={false}>
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
                    <Button className="add" icon={<HiOutlineUserAdd size={15} />}>Add</Button>
                    <Button className="clear" icon={<AiOutlineClear size={15} />}>Clear</Button>
                </div>
            </form>
        </Modal>
    );
}

export default PatientAdd;