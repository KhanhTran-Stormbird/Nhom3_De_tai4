import { useState } from "react";
import "../../styles/sinhvien/project.css";

const Project = () => {
  const [] = useState(false);

  return (
    <div className="project-page-container">
      {/* Header */}
      <div className="project-page-header">
        <div className="project-page-filter">
          <label htmlFor="doan-radio">Loại đợt:</label>
          <input type="radio" id="doan-radio" name="dot" defaultChecked />
          <button className="button2">Đồ án</button>
        </div>
        <div className="project-page-date-info">
          <p>Ngày bắt đầu: <strong>20-01-2025</strong></p>
          <p>Ngày kết thúc: <strong>22-01-2025</strong></p>
        </div>
      </div>

      {/* Đăng ký Button */}
      <div className="project-page-register-section">
        <h1 className="project-page-dangki">Đăng kí</h1>
      </div>

      {/* Nội dung chính */}
      <div className="project-page-content">
        <div className="project-page-grid-icon">▦</div>
        <div className="project-page-table-container">
          <a href="/register-topic-wrapper" className="project-page-register-topic">Click vào đây để đăng kí đề tài</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
