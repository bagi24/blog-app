import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Homepage from './routes/Homepage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import Write from './routes/Write.jsx';
import LoginPage from './routes/LoginPage.jsx';
import Register from './routes/Register.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/posts',
    element: <PostListPage />,
  },
  {
    path: '/:slug',
    element: <SinglePostPage />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
