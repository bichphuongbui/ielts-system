import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage, About } from '../pages/publicPage';
import { Register, Login } from '../pages/auth';

// Tạo router với các routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  // Các route khác sẽ thêm vào đây
  // {
  //   path: '/dashboard',
  //   element: <Dashboard />,
  // },
  // {
  //   path: '/students',
  //   element: <StudentsPage />,
  // },
  // {
  //   path: '/teachers',
  //   element: <TeachersPage />,
  // },
]);

// Component Router chính
export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
