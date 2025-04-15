import { useState } from "react";
import "../../styles/giangvien/GiangVienUpd.css";

interface GiangVienInfo {
  fullName: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
  field: string;
  teacherId: string;
  position: string;
  majorCode: string;
}

interface GiangVienUpdProps {
  setCurrentPage: (page: string) => void;
  giangVienInfo: GiangVienInfo;
  setGiangVienInfo: React.Dispatch<React.SetStateAction<GiangVienInfo>>;
}

export default function GiangVienUpd({
  setCurrentPage,
  giangVienInfo,
  setGiangVienInfo,
}: GiangVienUpdProps) {
  const [updatedInfo, setUpdatedInfo] = useState(giangVienInfo);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `/api/giang-vien/${giangVienInfo.teacherId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedInfo),
        }
      );

      if (!response.ok) throw new Error("Cập nhật thất bại!");

      setGiangVienInfo(updatedInfo);
      localStorage.setItem("giangVienInfo", JSON.stringify(updatedInfo));

      setSuccessMessage("Cập nhật thông tin thành công!");
      setErrorMessage(null);

      setTimeout(() => {
        setSuccessMessage(null);
        setCurrentPage("personal-info");
      }, 1500);
    } catch (error) {
      setErrorMessage("Lỗi khi cập nhật thông tin!");
      console.error(error);
    }
  };

  return (
    <div className="update3-container3">
      <div className="header2">
        <h2>Cập nhật thông tin</h2>
      </div>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

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
            <input
              name={name}
              type="text"
              value={updatedInfo[name as keyof GiangVienInfo]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="save-btn" onClick={handleSave}>
          Lưu thay đổi
        </button>
        <button
          className="cancel-btn"
          onClick={() => setCurrentPage("personal-info")}
        >
          Hủy
        </button>
      </div>
    </div>
  );
}
