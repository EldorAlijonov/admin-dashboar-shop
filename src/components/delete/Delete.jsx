import { Button, Modal } from "antd";
import "./delete.scss";
const Delete = (props) => {
    const { open, clickCancel, clickDelete } = props;

    return (
        <Modal open={open} footer={null} closeIcon={null} width={300} className="deleteModal">
            <div className="top">
                <h1 className="title">
                    Delete patient data?
                </h1>
            </div>
            <div className="bottom">
                <Button className="cancel" type="text" onClick={clickCancel}>Cancel</Button>
                <Button className="delete" type="text" onClick={clickDelete}>Delete</Button>
            </div>

        </Modal>
    );
}

export default Delete;