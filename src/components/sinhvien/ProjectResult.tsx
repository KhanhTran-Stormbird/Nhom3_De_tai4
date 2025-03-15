import "../../styles/sinhvien/ProjectResult.css";

const ProjectResult = () => {
  return (
    <div className="project1-result1-container1">
      <div className="header1">
        <div className="filter1">
          <label htmlFor="doan1-radio">Loại đợt:</label>
          <input type="radio" id="doan1-radio" name="dot" defaultChecked />
          <button className="button2">Đồ án</button>
        </div>
        <div className="date1-info1">
          <p>Ngày bắt đầu: <strong>20-01-2025</strong></p>
          <p>Ngày kết thúc: <strong>22-01-2025</strong></p>
        </div>
      </div>

      <div className="register1-section11">
    <h2 className="project1-title">Kết quả đăng kí đồ án</h2>
</div>

      <div className="content1">
        <div className="grid1-icon1">▦</div>
        <div className="table1-container1">
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
