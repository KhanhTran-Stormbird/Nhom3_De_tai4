import { useState } from "react";
import "../../styles/sinhvien/Internship.css";

const Internship = () => {
  const [selected, setSelected] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckboxChange = () => {
    const newSelected = !selected;
    setSelected(newSelected);

    if (newSelected) {
      setShowMessage(true);

      // Ẩn thông báo sau 2.5 giây
      setTimeout(() => setShowMessage(false), 2500);
    }
  };

  return (
    <div className="internship-container">
      {/* Thông báo đăng ký thành công (Trôi ngang vào màn hình) */}
      <div className={`success-message ${showMessage ? "show" : ""}`}>
        ✅ Đăng ký thực tập thành công!
      </div>

      {/* Header */}
      <div className="header">
        <div className="filter">
          <label htmlFor="thuctap-radio">Loại đợt:</label>
          <input type="radio" id="thuctap-radio" name="dot" defaultChecked />
          <button className="button2">Thực tập</button>
        </div>
        <div className="date-info">
          <p>Ngày bắt đầu: <strong>20-01-2025</strong></p>
          <p>Ngày kết thúc: <strong>22-01-2025</strong></p>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="content">
        <div className="grid-icon">▦</div>
        <div className="table-container">
          <div className="title">
            <span className="icon">📅</span>
            <span className="title-text">Đăng kí thực tập</span>
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
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="internship-checkbox"></label>
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
