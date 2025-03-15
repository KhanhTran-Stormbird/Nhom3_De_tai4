import { useState, useEffect } from "react";
import "../../styles/sinhvien/PersonalInfo.css";
import UpdateForm from "./UpdateForm"; // Import UpdateForm

export default function PersonalInfo() {
  const [currentPage, setCurrentPage] = useState("personal-info");

  // State để lưu thông tin cá nhân
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Nguyễn Văn An",
    gender: "Nam",
    dob: "22/02/2000",
    phone: "0912345678",
    email: "pihanx1@gmail.com",
    major: "Công nghệ thông tin",
    majorCode: "CSE123",
    studentId: "12345678",
    class: "CNTT1",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("personalInfo") || "{}");
    if (Object.keys(storedData).length > 0) {
      setPersonalInfo((prev) => ({ ...prev, ...storedData }));
    }
  }, []);

  const fieldLabels: Record<string, string> = {
    fullName: "Họ và tên",
    gender: "Giới tính",
    dob: "Ngày sinh",
    phone: "Số điện thoại",
    email: "Email",
    major: "Chuyên ngành",
    majorCode: "Mã ngành",
    studentId: "Mã sinh viên",
    class: "Lớp",
  };

  // Hàm render component theo currentPage
  const renderContent = () => {
    if (currentPage === "update-form") {
      return <UpdateForm setCurrentPage={setCurrentPage} />;
    }
    return (
      <div className="personal-info-container">
        <h2 className="title">Thông tin cá nhân</h2>
        <div className="info-grid">
          {Object.entries(personalInfo).map(([key, value]) => (
            <div className="info-item" key={key}>
              <label>{fieldLabels[key] || key}</label>
              <input type="text" value={value} readOnly />
            </div>
          ))}
        </div>
        <div className="button-group">
          <button onClick={() => setCurrentPage("update-form")}>Cập nhật thông tin</button>
        </div>
      </div>
    );
  };

  return renderContent();
}

