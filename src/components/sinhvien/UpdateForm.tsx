import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sinhvien/UpdateForm.css";

export default function UpdateForm({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const navigate = useNavigate();

  // Lấy dữ liệu từ localStorage (nếu có)
  const storedData = JSON.parse(localStorage.getItem("personalInfo") || "{}");

  // State để lưu dữ liệu của form
  const [formData, setFormData] = useState({
    fullName: storedData.fullName || "Nguyễn Văn An",
    gender: storedData.gender || "Nam",
    dob: storedData.dob || "22/02/2000",
    phone: storedData.phone || "0912345678",
    email: storedData.email || "pxhoan12@gmail.com",
    major: storedData.major || "Công nghệ thông tin",
  });

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Hàm lưu dữ liệu và quay về trang thông tin cá nhân
  const handleSave = () => {
    localStorage.setItem("personalInfo", JSON.stringify(formData));
    alert("Lưu thay đổi thành công!"); 
    setCurrentPage("/personal-info"); // Quay lại trang thông tin cá nhân
  };
  

  return (
    <div className="update-form-container">
      <div className="update-form-header">Cập nhật</div>
      <div className="update-form-body">
        <div className="update-form-group">
          <label htmlFor="fullName">Họ và tên</label>
          <input id="fullName" type="text" value={formData.fullName} onChange={handleChange} />
        </div>

        <div className="update-form-group">
          <label htmlFor="gender">Giới tính</label>
          <input id="gender" type="text" value={formData.gender} onChange={handleChange} />
        </div>

        <div className="update-form-group">
          <label htmlFor="dob">Ngày sinh</label>
          <input id="dob" type="text" value={formData.dob} onChange={handleChange} />
        </div>

        <div className="update-form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input id="phone" type="text" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="update-form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="update-form-group">
          <label htmlFor="major">Chuyên ngành</label>
          <input id="major" type="text" value={formData.major} onChange={handleChange} />
        </div>

        <div className="update-form-actions">
          <button className="update-form-save-btn" onClick={handleSave}>
            Lưu thay đổi
          </button>
          <button className="update-form-cancel-btn" onClick={() => setCurrentPage("personal-info")}>
  Hủy
</button>
        </div>
      </div>
    </div>
  );
}
