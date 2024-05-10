import { Link } from "react-router-dom";
import { item } from "./item";
import { useState } from "react";
import "./sidebar.scss";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
    const [active, setActive] = useState("/");
    const handleActive = (to) => setActive(to);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" className="link">
                    <div className="logo">Clinic App</div>
                </Link>
            </div>
            <div className="center">
                <ul>

                    {item.map((item, index) => (
                        <Link to={item.to} className="link" key={index}>
                            <li onClick={() => handleActive(item.to)} className={active===item.to ? "active" : ""}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    ))}
                    <Link to="/login" className="link">
                        <li>
                            <MdOutlineLogout className="icon" />
                            <span>Logout </span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" />
                <div className="colorOption" />
            </div>
        </div>
    );
}

export default Sidebar;