import "./navbar.scss";
import { MdLanguage } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Avatar, Button, Dropdown } from "antd";
const Navbar = () => {
    const items = [
        {
            key: '1',
            label: "O'zbekcha"
        },
        {
            key: '2',
            label: "Russian"
        },
    ]
    const [language, setLanguage] = useState(items.label);
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (

        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" name="search" placeholder="Search"/>
                    <CiSearch className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <MdLanguage className="icon" />
                        Uz
                    </div>
                    <div className="item">
                        <Button icon={<IoIosSunny className="icon" />} type="text" />
                    </div>
                    <div className="item">
                        <Button icon={<FaRegBell className="icon" />} type="text" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item navbar-avatar">
                        <Avatar size={35} icon={<img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar" />} />
                        <div className="avatarTitle">
                            <h5>Admin</h5>
                            <span>D.Berdiyev</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;