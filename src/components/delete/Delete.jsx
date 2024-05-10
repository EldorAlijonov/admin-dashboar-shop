import { Button, Modal } from "antd";
import "./delete.scss";
import { useState } from "react";
const Delete = () => {
    const [open, setOpen] = useState(false);

    return (
        <Modal open={open} footer={null} closeIcon={null} width={300} className="deleteModal">
            <div className="top">
                <h1 className="title">
                    Delete patient data?
                </h1>
            </div>
            <div className="bottom">
                <Button className="cancel">Cancel</Button>
                <Button className="delete">Delete</Button>
            </div>

        </Modal>
    );
}

export default Delete;