import { Divider, Table } from "antd";
import { CiSearch } from "react-icons/ci";
import "./patienttable.scss";
const PatientTable = (props) => {
    const { data, columns, search } = props;
    const noData = "Malumotlar mavjud emas";

    return (
        <>
            <div className="patientTable">
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
                    locale={{ emptyText: data === null || data.length === 0 ? noData : '' }}
                />
            </div>

        </>
    );
}

export default PatientTable;