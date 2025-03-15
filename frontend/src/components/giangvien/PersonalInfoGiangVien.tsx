import { useState, useEffect } from "react";
import "../../styles/giangvien/PersonalInfoGiangVien.css";
import GiangVienUpd from "./GiangVienUpd"; // Import trang cập nhật

export default function PersonalInfoGiangVien() {
  const [currentPage, setCurrentPage] = useState("personal-info");

  // State lưu thông tin giảng viên
  const [giangVienInfo, setGiangVienInfo] = useState({
    fullName: "Trần Văn Bình",
    gender: "Nam",
    dob: "15/08/1985",
    phone: "0987654321",
    email: "binh.tran@tlu.edu.vn",
    field: "Trí tuệ nhân tạo",
    teacherId: "23456789",
    position: "Thạc sĩ",
    majorCode: "CSE567",
  });

  // Lấy dữ liệu từ localStorage nếu có
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("giangVienInfo") || "{}");
    if (Object.keys(storedData).length > 0) {
      setGiangVienInfo((prev) => ({ ...prev, ...storedData }));
    }
  }, []);

  // Danh sách nhãn tiếng Việt cho từng trường thông tin
  const labelMap: Record<string, string> = {
    fullName: "Họ và tên",
    gender: "Giới tính",
    dob: "Ngày sinh",
    phone: "Số điện thoại",
    email: "Email",
    field: "Lĩnh vực",
    teacherId: "Mã giảng viên",
    position: "Chức danh",
    majorCode: "Mã chuyên ngành",
  };

  // Xử lý render nội dung theo trạng thái `currentPage`
  const renderContent = () => {
    if (currentPage === "update-form") {
      return (
        <GiangVienUpd 
          setCurrentPage={setCurrentPage} 
          giangVienInfo={giangVienInfo} 
          setGiangVienInfo={setGiangVienInfo} 
        />
      );
    }

    return (
      <div className="personal-info-container">
        <h2 className="title">Thông tin cá nhân</h2>
        <div className="info-grid">
          {Object.entries(giangVienInfo).map(([key, value]) => (
            <div className="info-item" key={key}>
              <label>{labelMap[key] || key}</label> 
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
