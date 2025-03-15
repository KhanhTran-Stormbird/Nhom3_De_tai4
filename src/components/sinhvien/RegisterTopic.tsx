import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sinhvien/RegisterTopic.css";

const RegisterTopic = () => {
  const [topicName, setTopicName] = useState("");
  const [technology, setTechnology] = useState("");
  const [teacher, setTeacher] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ topicName, technology, teacher });
    alert("Đăng kí thành công!");
  };

  return (
    <div className="register-topic-wrapper">
      <div className="register-topic-container">
        <h1>Đăng kí đồ án</h1>
        <div className="register-form">
          <h3>Đăng kí đề tài</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="topicName">Tên đề tài *</label>
            <input
              id="topicName"
              type="text"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              required
              placeholder="Nhập tên đề tài"
            />

            <label htmlFor="technology">Công nghệ sử dụng</label>
            <textarea
              id="technology"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              placeholder="Nhập công nghệ sử dụng"
            ></textarea>

            <label htmlFor="teacher">Chọn giảng viên hướng dẫn*</label>
            <select
              id="teacher"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
              required
              title="Chọn giảng viên hướng dẫn"
            >
              <option value="">-- Chọn giảng viên --</option>
              <option value="gv1">Giảng viên 1</option>
              <option value="gv2">Giảng viên 2</option>
            </select>

            <div className="button-group">
              <button type="submit" className="btn-register">Đăng Kí</button>
              <button type="button" className="btn-cancel" onClick={() => navigate("/dashboard/sinhvien")}>
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTopic;