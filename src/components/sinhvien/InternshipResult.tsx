
import "../../styles/sinhvien/InternshipResult.css";

const InternshipResult = () => {
  return (
    <div className="internship-result-container">
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

      {/* Kết quả đăng ký thực tập */}
      <div className="content">
        <h2 className="title">Kết quả đăng kí thực tập</h2>
        <table>
          <thead>
            <tr>
              <th>Tên Công ty</th>
              <th>Địa chỉ</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Ghi chú</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Viettel</td>
              <td>Cầu Giấy, Hà Nội</td>
              <td>10/02/2025</td>
              <td>06/04/2025</td>
              <td>-</td>
              <td className="status approved">Đã duyệt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternshipResult;
