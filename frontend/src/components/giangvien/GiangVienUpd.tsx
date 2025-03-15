import { useState } from "react";
import "../../styles/giangvien/GiangVienUpd.css";

interface GiangVienUpdProps {
  setCurrentPage: (page: string) => void;
  giangVienInfo: Record<string, string>;
  setGiangVienInfo: (info: Record<string, string>) => void;
}

export default function GiangVienUpd({ setCurrentPage, giangVienInfo, setGiangVienInfo }: GiangVienUpdProps) {
  const [updatedInfo, setUpdatedInfo] = useState(giangVienInfo);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setGiangVienInfo(updatedInfo);
    localStorage.setItem("giangVienInfo", JSON.stringify(updatedInfo));

    // Hiển thị thông báo cập nhật thành công
    setSuccessMessage("Cập nhật thông tin thành công!");

    // Quay lại trang trước sau 1.5 giây
    setTimeout(() => {
      setSuccessMessage(null);
      setCurrentPage("personal-info");
    }, 1500);
  };

  return (
    <div className="update3-container3">
      <div className="header2">
        <h2>Cập nhật</h2>
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="form-grid">
        {[
          { label: "Họ và tên", name: "fullName" },
          { label: "Giới tính", name: "gender" },
          { label: "Ngày sinh", name: "dob" },
          { label: "Số điện thoại", name: "phone" },
          { label: "Chức danh", name: "position" },
          { label: "Lĩnh vực", name: "field" },
        ].map(({ label, name }) => (
          <div className="form-group" key={name}>
            <label>{label}</label>
            <input name={name} type="text" value={updatedInfo[name]} onChange={handleChange} />
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="save-btn" onClick={handleSave}>Lưu thay đổi</button>
        <button className="cancel-btn" onClick={() => setCurrentPage("personal-info")}>Hủy</button>
      </div>
    </div>
  );
}
