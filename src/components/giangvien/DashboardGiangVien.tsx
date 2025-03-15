import { JSX, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/giangvien/Dashboard.css";

import {
    Menu as MenuIcon,
    Home,
    ClipboardList,
    User,
    Key,
    ChevronDown,
} from "lucide-react";

import ProjectApproval from "./ProjectApproval";
import PersonalInfoGiangVien from "./PersonalInfoGiangVien";
import ChangePassword from "../auth/ChangePassword";

interface MenuItem {
    name: string;
    key: string;
    icon?: JSX.Element;
}

const menuItems: MenuItem[] = [
    { name: "Trang chủ", key: "home", icon: <Home size={18} /> },
    { name: "Phê duyệt đồ án", key: "project-approval", icon: <ClipboardList size={18} /> },
    { name: "Thông tin cá nhân", key: "personalinfor-giangvien", icon: <User size={18} /> },
    { name: "Đổi mật khẩu", key: "change-password", icon: <Key size={18} /> },
];

const gridItems: MenuItem[] = [
    { name: "Phê duyệt đồ án", key: "project-approval" },
    { name: "Thông tin cá nhân", key: "personalinfor-giangvien" },
    { name: "Đổi mật khẩu", key: "change-password" },
];

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<string>("home");
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const renderContent = () => {
        switch (currentPage) {
            case "project-approval":
                return <ProjectApproval />;
            case "personalinfor-giangvien":
                return <PersonalInfoGiangVien setCurrentPage={setCurrentPage} />; // ✅ Truyền prop
            case "change-password":
                return <ChangePassword />;
            default:
                return (
                    <div className="grid-container">
                        {gridItems.map((item, index) => (
                            <div key={index} className="grid-item" onClick={() => setCurrentPage(item.key)}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                );
        }
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <div className="header">
                <div className="nav-left">
                    <img
                        className="logo"
                        src="https://www.tlu.edu.vn/Portals/0/2014/Logo-WRU.png"
                        alt="Logo Trường Đại học Thủy Lợi"
                    />
                    <button
                        className="menu-button"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Mở menu"
                        title="Mở menu"
                    >
                        <MenuIcon className="menu-icon" />
                    </button>
                </div>

                {/* User Dropdown */}
                <div className="user-dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <User className="user-icon" size={20} />
                    <span className="username">Trần Văn Bình</span>
                    <ChevronDown className={`dropdown-icon ${dropdownOpen ? "rotated" : ""}`} size={18} />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={() => setCurrentPage("personal-info")}>
                                Thông tin tài khoản
                            </div>
                            <div className="dropdown-item" onClick={() => setCurrentPage("change-password")}>
                                Đổi mật khẩu
                            </div>
                            <div className="dropdown-item" onClick={() => navigate("/login")}>
                                Đăng xuất
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="content-wrapper">
                {/* Sidebar */}
                <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="menu-item" onClick={() => setCurrentPage(item.key)}>
                                {item.icon} <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="main-content">{renderContent()}</div>
            </div>
        </div>
    );
}
