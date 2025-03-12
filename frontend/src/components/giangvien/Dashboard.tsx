import { JSX, useState } from "react";
import "../../styles/giangvien/Dashboard.css";

import {
  Menu as MenuIcon,
  Home,
  ClipboardList,
  User,
  ChevronDown,
} from "lucide-react";

import ProjectApproval from "./ProjectApproval";


interface MenuItem {
  name: string;
  key: string;
  icon?: JSX.Element;
}

const menuItems: MenuItem[] = [
  { name: "Trang chủ", key: "home", icon: <Home size={18} /> },
  { name: "Phê duyệt đồ án", key: "project-approval", icon: <ClipboardList size={18} /> },
  { name: "Thông tin cá nhân", key: "personal-info", icon: <User size={18} /> },
];

const gridItems: MenuItem[] = [
  { name: "Phê duyệt đồ án", key: "project-approval" },
  { name: "Thông tin cá nhân", key: "personal-info" },
  
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const renderContent = () => {
    switch (currentPage) {
      case "project-approval":
        return <ProjectApproval />;
        
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
  src="data:image/png;base64,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" 
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
              <div className="dropdown-item" onClick={() => setCurrentPage("personal-info")}>Thông tin tài khoản</div>
              <div className="dropdown-item">Đổi mật khẩu</div>
              <div className="dropdown-item">Đăng xuất</div>
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
