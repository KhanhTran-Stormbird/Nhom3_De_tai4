import "../../styles/sinhvien/ProjectResult.css";

const ProjectResult = () => {
  return (
    <div className="project-result-container">
      <div className="header">
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

      <div className="register-section">
        <button className="project-btn">Kết quả đăng kí đồ án</button>
      </div>

      <div className="content">
        <div className="grid-icon">▦</div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Tên đề tài</th>
                <th>Công nghệ</th>
                <th>Giảng viên hướng dẫn</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Xây dựng Website bán quần áo qua mạng.</td>
                <td>ReactJS, Node.js, MySQL</td>
                <td>Trần Văn B</td>
                <td>5 tháng</td>
                <td className="pending">Chờ duyệt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectResult;
