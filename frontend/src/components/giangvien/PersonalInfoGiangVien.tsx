import { useState, useEffect } from "react";
import "../../styles/giangvien/PersonalInfoGiangVien.css";
import GiangVienUpd from "./GiangVienUpd";

export default function PersonalInfoGiangVien() {
  const [currentPage, setCurrentPage] = useState("personal-info");

  const [giangVienInfo, setGiangVienInfo] = useState({
    fullName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    field: "Chưa cập nhật",
    teacherId: "",
    position: "Chưa cập nhật",
    majorCode: "N/A",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user") || "{}");

    if (Object.keys(storedData).length > 0) {
      setGiangVienInfo((prev) => ({
        ...prev,
        fullName: storedData.ho_ten || "",
        gender: storedData.gioi_tinh || "",
        dob: storedData.ngay_sinh
          ? new Date(storedData.ngay_sinh).toLocaleDateString("vi-VN")
          : "",
        phone: storedData.so_dien_thoai || "",
        email: storedData.email || "",
        teacherId: storedData.username || "",
      }));

      fetch(`/api/giang-vien/${storedData.username}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            const giangvien = data[0];
            setGiangVienInfo((prev) => ({
              ...prev,
              field: giangvien?.linh_vuc || "Chưa cập nhật",
              position: giangvien?.chuc_danh || "Chưa cập nhật",
              majorCode: giangvien?.ma_nganh || "N/A",
            }));
          } else {
            console.warn(
              "API giảng viên trả về dữ liệu không hợp lệ hoặc rỗng."
            );
          }
        })
        .catch((err) =>
          console.error("Lỗi khi lấy thông tin giảng viên:", err)
        );
    }
  }, []);

  const labelMap = {
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
              <label>{labelMap[key as keyof typeof labelMap] || key}</label>
              <input type="text" value={value} readOnly />
            </div>
          ))}
        </div>
        <div className="button-group">
          <button onClick={() => setCurrentPage("update-form")}>
            Cập nhật thông tin
          </button>
        </div>
      </div>
    );
  };

  return renderContent();
}
