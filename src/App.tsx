import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import MainLayout from './components/layout/mainLayout/MainLayout';
import Teacher from './pages/teacher/Teacher';
import TeacherEdit from './pages/teacher/TeacherEdit';
import TeacherCreate from './pages/teacher/TeacherCreate';
import Student from './pages/student/Student';
import StudentCreate from './pages/student/StudentCreate';
import StudentEdit from './pages/student/StudentEdit';
import Field from './pages/Major/Major';
import Major from './pages/Major/Major';
import MajorCreate from './pages/Major/MajorCreate';
import MajorEdit from './pages/Major/MajorEdit';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
    {
      path: '/login',
      element: (
        <Login />
      ),
    },
    {
      path: '/teacher',
      element: (
        <MainLayout>
          <Teacher />
        </MainLayout>
      ),
    },
    {
      path: '/teacher/edit',
      element: (
        <MainLayout>
          <TeacherEdit />
        </MainLayout>
      ),
    },
    {
      path: '/teacher/create',
      element: (
        <MainLayout>
          <TeacherCreate />
        </MainLayout>
      ),
    },
    {
      path: '/student',
      element: (
        <MainLayout>
          <Student />
        </MainLayout>
      ),
    },
    {
      path: '/student/edit',
      element: (
        <MainLayout>
          <StudentEdit />
        </MainLayout>
      ),
    },
    {
      path: '/student/create',
      element: (
        <MainLayout>
          <StudentCreate />
        </MainLayout>
      ),
    },
    {
      path: '/major',
      element: (
        <MainLayout>
          <Major />
        </MainLayout>
      ),
    },
    {
      path: '/major/create',
      element: (
        <MainLayout>
          <MajorCreate />
        </MainLayout>
      ),
    },
    {
      path: '/major/edit',
      element: (
        <MainLayout>
          <MajorEdit />
        </MainLayout>
      ),
    },
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
