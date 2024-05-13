import { CiSearch } from "react-icons/ci";
import { Divider, Table } from "antd";
import "./doctorTable.scss";
const DoctorTable = (props) => {
    const { data, columns, search } = props;
    const noData = "Malumotlar mavjud emas";

    return (
        <>
            <div className="doctorTable">
                <div className="top">
                    <div className="search">
                        <input type="text"
                            name="search"
                            placeholder="Search"
                            onChange={(e) => search(e.target.value)}
                        />
                        <CiSearch className="icon" />
                    </div>
                </div>
                <Divider />
                <Table
                    columns={columns}
                    dataSource={data}
                    size="middle"
                    locale={data}
                />
            </div>

        </>
    );
}

export default DoctorTable;

