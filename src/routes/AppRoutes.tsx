import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Home } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to={'/'}></Navigate>,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
