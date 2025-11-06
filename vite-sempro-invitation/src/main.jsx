import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Undangan from './pages/undangan.jsx';
import GenerateLink from './pages/GenerateLink.jsx';
import './index.css'; // Pastikan Tailwind CSS diimpor

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Ini akan menjadi halaman default untuk '/'
        element: <Undangan />,
      },
      {
        path: 'generate',
        element: <GenerateLink />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);