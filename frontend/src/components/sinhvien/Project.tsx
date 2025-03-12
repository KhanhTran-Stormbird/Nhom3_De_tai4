import { useState } from "react";
import "../../styles/sinhvien/Project.css";

const Project = () => {
  const [] = useState(false);

  return (
    <div className="project-container">
      {/* Header */}
      <div className="project-header">
        <div className="filter">
          <label htmlFor="doan-radio">Loại đợt:</label>
          <input type="radio" id="doan-radio" name="dot" defaultChecked />
          <button>Đồ án</button>
        </div>
        <div className="date-info">
          <p>Ngày bắt đầu: <strong>20-01-2025</strong></p>
          <p>Ngày kết thúc: <strong>22-01-2025</strong></p>
        </div>
      </div>

      {/* Đăng ký Button */}
      <div className="register-section">
        <button className="register-button">Đăng kí</button>
      </div>

      {/* Nội dung chính */}
      <div className="content">
        <div className="grid-icon">▦</div>
        <div className="refresh-icon">⟳</div>
        <div className="table-container">
          <a href="dang-ky-de-tai" className="RegisterTopic">Click vào đây để đăng kí đề tài</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
