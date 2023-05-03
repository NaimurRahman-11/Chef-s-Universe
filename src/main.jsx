import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main.jsx';
import Login from './components/Login/Login.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Blog from './components/Blog/Blog.jsx';
import Register from './components/Register/Register';
import AboutUs from './components/AboutUs/AboutUs';
import ViewRecipes from './components/ViewRecipes/ViewRecipes';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRoute from './components/Routes/PrivateRoute';
import ErrorPage from './components/ErrorPage/error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        errorElement: <ErrorPage></ErrorPage>
        
      },

      {
        path: '/login',
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
      },

      {
        path: '/blog',
        element: <Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/register',
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({ params }) => fetch(`https://chef-recipes-server-naimurrahman-11.vercel.app/chef/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);