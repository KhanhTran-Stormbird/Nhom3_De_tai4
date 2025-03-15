import React, { useState } from "react";
import "../../styles/giangvien/ProjectApproval.css";

const initialStudents = [
    { id: 1, name: "Nguyễn Văn A", studentId: "A123456", project: "Xây dựng Website bán máy tính qua mạng.", status: "Duyệt" },
    { id: 2, name: "Nguyễn Văn B", studentId: "15324551", project: "Xây dựng Website bán quần áo qua mạng.", status: "Từ chối" },
    { id: 3, name: "Nguyễn Văn C", studentId: "15324551", project: "Xây dựng Website bán quần áo qua mạng.", status: "Duyệt" },
    { id: 4, name: "Nguyễn Văn D", studentId: "15324551", project: "Xây dựng Website bán quần áo qua mạng.", status: "Từ chối" },
    { id: 5, name: "Nguyễn Văn E", studentId: "15324551", project: "Xây dựng Website bán quần áo qua mạng.", status: "Duyệt" },
];

const ProjectApproval: React.FC = () => {
    const [students, setStudents] = useState(initialStudents);

    const handleApproval = (id: number, newStatus: string) => {
        setStudents(
            students.map((student) =>
                student.id === id ? { ...student, status: newStatus } : student
            )
        );
    };

    return (
        <div className="container">
            <h2 className="title">Danh Sách Sinh Viên Hướng Dẫn</h2>

            <div className="filter-container">
                <label className="filter-label" htmlFor="faculty">Khoa</label>
                <select id="faculty" className="filter-select" aria-label="Chọn khoa">
                    <option>Công nghệ thông tin</option>
                </select>

                <label className="filter-label" htmlFor="major">Chuyên ngành</label>
                <select id="major" className="filter-select" aria-label="Chọn chuyên ngành">
                    <option>Kĩ thuật phần mềm</option>
                </select>

                <button className="search-btn">🔍</button>
            </div>

            <table className="student-table">
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Họ và tên</th>
                        <th>Mã sinh viên</th>
                        <th>Đề tài đồ án</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td className="student-name">
                                <a href="#">{student.name}</a>
                            </td>
                            <td>{student.studentId}</td>
                            <td>{student.project}</td>
                            <td className={student.status === "Duyệt" ? "approved" : "rejected"}>{student.status}</td>
                            <td>
                                <button className="approve-btn" onClick={() => handleApproval(student.id, "Duyệt")}>
                                    Duyệt
                                </button>
                                <button className="reject-btn" onClick={() => handleApproval(student.id, "Từ chối")}>
                                    Từ chối
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button className="page-btn">Trước</button>
                <span className="page-number">1</span>
                <button className="page-btn">Sau</button>
            </div>
        </div>
    );
};

export default ProjectApproval;
