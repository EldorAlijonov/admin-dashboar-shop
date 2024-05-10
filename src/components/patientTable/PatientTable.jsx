import { Button, Divider, Flex, Table } from "antd";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline  } from "react-icons/ti";
import "./patienttable.scss";
import { CiSearch } from "react-icons/ci";
const PatientTable = () => {
    const columns = [
        {
            title: "№",
            dataIndex: "id"
        },
        {
            title: 'Name',
            dataIndex: 'name',
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
            render: (text, record) => (
                <Flex gap={30} justify="center">
                    <Button onClick={() => handleEdit(record)} className="edit"
                        icon={<FaUserEdit size={20} />} />
                    <Button onClick={() => handleDelete(record)} className="delete"
                        icon={<TiUserDeleteOutline  size={20} />} />
                </Flex>
            ),
        },

    ];
    const data = [
        {
            id: 1,
            key: '1',
            name: 'John Brown',
            age: 36,
            phone: +998901605566,
            gender: "Male",
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            gender: "Male",
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            id: 5,
            key: '5',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },

    ];
    const handleEdit = (record) => {
        // Handle edit action
    };

    const handleDelete = (record) => {
        // Handle delete action
    };
    return (

        <div className="patientTable">
            <div className="top">
                <div className="search">
                    <input type="text" name="search" placeholder="Search" />
                    <CiSearch className="icon" />
                </div>
            </div>
            <Divider />
            <Table columns={columns} dataSource={data} size="middle" />

        </div>
    );
}

export default PatientTable;