import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Import các component của Sinh viên
import DashboardSinhvien from "./components/sinhvien/DashboardSinhvien";
import PersonalInfo from "./components/sinhvien/PersonalInfo";
import Internship from "./components/sinhvien/InternshipRegister";
import InternshipResult from "./components/sinhvien/InternshipResult";
import Project from "./components/sinhvien/ProjectRegister";
import ProjectResult from "./components/sinhvien/ProjectResult";
import RegisterTopic from "./components/sinhvien/RegisterTopic";
import UpdateForm from "./components/sinhvien/UpdateForm";

// Import các component của Giảng viên
import DashboardGiangVien from "./components/giangvien/DashboardGiangVien";
import PersonalInfoGiangVien from "./components/giangvien/PersonalInfoGiangVien";
import GiangVienUpd from "./components/giangvien/GiangVienUpd";




// Import các component của Trưởng khoa
// import DashboardTruongKhoa from "./components/truongkhoa/DashboardTruongKhoa";

// Import các component liên quan đến xác thực
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import Unauthorized from "./components/auth/Unauthorized";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Hàm lấy vai trò người dùng từ localStorage
const getUserRole = () => {
  const user = localStorage.getItem("user");
  if (!user) return null;
  try {
    return JSON.parse(user).role;
  } catch (error) {
    return null;
  }
};

function App() {
  const [userRole, setUserRole] = useState<string | null>(getUserRole());

  useEffect(() => {
    const handleStorageChange = () => setUserRole(getUserRole());

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Điều hướng mặc định dựa trên vai trò */}
        <Route
          path="/"
          element={
            userRole === "sinh_vien" ? <Navigate to="/dashboard/sinhvien" replace />
              : userRole === "giang_vien" ? <Navigate to="/dashboard/giangvien" replace />
                : userRole === "truong_khoa" ? <Navigate to="/dashboard/truongkhoa" replace />
                  : <Navigate to="/login" replace />
          }
        />

        {/* Trang đăng nhập */}
        <Route path="/login" element={<Login />} />

        {/* Trang đổi mật khẩu */}
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Trang lỗi quyền truy cập */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Bảo vệ các trang dành riêng cho Sinh viên */}
        <Route element={<ProtectedRoute allowedRoles={["sinh_vien"]} />}>
          <Route path="/dashboard/sinhvien" element={<DashboardSinhvien />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship-result" element={<InternshipResult />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-result" element={<ProjectResult />} />
          <Route path="/update-form" element={<UpdateForm />} />
          <Route path="/register-topic-wrapper" element={<RegisterTopic />} />
        </Route>

        {/* Bảo vệ các trang dành riêng cho Giảng viên */}
        <Route element={<ProtectedRoute allowedRoles={["giang_vien"]} />}>
          <Route path="/dashboard/giangvien" element={<DashboardGiangVien />} />
          <Route path="/personalinfor-giangvien" element={<PersonalInfoGiangVien />} />
          <Route path="/personalinfor-giangvien" element={<GiangVienUpd />} />

        </Route>

        {/* Bảo vệ các trang dành riêng cho Trưởng khoa */}
        {/* <Route element={<ProtectedRoute allowedRoles={["truong_khoa"]} />}>
          <Route path="/dashboard/truongkhoa" element={<DashboardTruongKhoa />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
