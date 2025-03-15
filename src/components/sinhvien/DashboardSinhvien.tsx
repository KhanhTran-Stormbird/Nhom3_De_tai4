import { JSX, useState } from "react";
import "../../styles/sinhvien/Dashboard.css";
import {
  Menu as MenuIcon,
  Home,
  FileText,
  ClipboardList,
  CheckCircle,
  User,
  ChevronDown,
} from "lucide-react";

import PersonalInfo from "./PersonalInfo";
import Internship from "./InternshipRegister";
import InternshipResult from "./InternshipResult";
import ProjectResult from "./ProjectResult";
import Project from "./ProjectRegister";
import ChangePassword from "../auth/ChangePassword";
import Login from "../auth/Login";
import UpdateForm from "./UpdateForm";
import RegisterTopic from "./RegisterTopic";

import { useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  key: string;
  icon?: JSX.Element;
}

const menuItems: MenuItem[] = [
  { name: "Trang chủ", key: "home", icon: <Home size={18} /> },
  { name: "Đăng ký thực tập", key: "internship", icon: <ClipboardList size={18} /> },
  { name: "Đăng ký đồ án", key: "project-page-container", icon: <FileText size={18} /> },
  { name: "Kết quả đồ án", key: "project-result", icon: <CheckCircle size={18} /> },
  { name: "Kết quả thực tập", key: "internship-result", icon: <CheckCircle size={18} /> },
  { name: "Thông tin cá nhân", key: "personal-info", icon: <User size={18} /> },
];

const gridItems: MenuItem[] = [
  { name: "Đăng ký thực tập", key: "internship" },
  { name: "Đăng ký đồ án", key: "project-page-container" },
  { name: "Kết quả đồ án", key: "project-result" },
  { name: "Kết quả thực tập", key: "internship-result" },
  { name: "Thông tin cá nhân", key: "personal-info" },
  { name: "Danh sách giảng viên", key: "teachers" },
];

export default function DashboardSinhvien() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  // Lấy thông tin người dùng từ localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const hoTen = user.ho_ten || "Người dùng";

  const renderContent = () => {
    switch (currentPage) {
      case "personal-info":
        return <PersonalInfo />;
      case "internship":
        return <Internship />;
      case "internship-result":
        return <InternshipResult />;
      case "project-result":
        return <ProjectResult />;
      case "project-page-container":
        return <Project />;
      case "change-password":
        return <ChangePassword />;
          case "register-topic-wrapper":
            return <RegisterTopic />;
            case "update-form":
              return <UpdateForm />;
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
          <span className="username">{hoTen}</span>
          <ChevronDown className={`dropdown-icon ${dropdownOpen ? "rotated" : ""}`} size={18} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => setCurrentPage("personal-info")}>
                Thông tin tài khoản
              </div>
              <div className="dropdown-item" onClick={() => setCurrentPage("change-password")}>
                Đổi mật khẩu
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  localStorage.removeItem("user"); // Xóa user khỏi localStorage khi đăng xuất
                  navigate("/login");
                }}
              >
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
