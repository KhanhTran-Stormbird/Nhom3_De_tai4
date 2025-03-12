import { useState } from "react";
import "../../styles/sinhvien/Internship.css";

const Internship = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="internship-container">
      {/* Header */}
      <div className="header">
        <div className="filter">
          <label htmlFor="thuctap-radio">Loại đợt:</label>
          <input type="radio" id="thuctap-radio" name="dot" defaultChecked />
          <button>Thực tập</button>
        </div>
        <div className="date-info">
          <p>Ngày bắt đầu: <strong>20-01-2025</strong></p>
          <p>Ngày kết thúc: <strong>22-01-2025</strong></p>
        </div>
      </div>

      {/* Đăng ký Button */}
      <div className="register-section">
      </div>

      {/* Nội dung chính */}
      <div className="content">
        <div className="grid-icon">▦</div>
        <div className="table-container">
          <div className="title">
            <span className="icon">📅</span>
            <span className="title-text">Đăng kí thực tập </span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Tuần</th>
                <th>Thời gian</th>
                <th>Đăng kí</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24 --&gt; 31 (10/02/2025 - 06/04/2025)</td>
                <td>2 tháng</td>
                <td>
                  <input
                    type="checkbox"
                    id="internship-checkbox"
                    title="Chọn đăng ký thực tập"
                    checked={selected}
                    onChange={() => setSelected(!selected)}
                  />
                  <label htmlFor="internship-checkbox">Chọn</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Internship;
