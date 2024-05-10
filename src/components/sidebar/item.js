import { MdDashboard, MdOutlineSettings } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
export const item = [
    {
        to: "/",
        icon: <MdDashboard className="icon" />,
        title: "Dashboard"
    },
    {
        to: "/doctor",
        icon: <FaUserDoctor className="icon" />,
        title: "Doctors"
    },
    {
        to: "/patient",
        icon: <HiUsers className="icon" />,
        title: "Patients"
    },
    {
        to: "/setting",
        icon: <MdOutlineSettings className="icon" />,
        title: "Settings"
    }
]