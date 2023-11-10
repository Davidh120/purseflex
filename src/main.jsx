import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import Pricing from './pages/Pricing.jsx';
import Login from './pages/Login.jsx';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/purseflex/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/purseflex/",//pricing
        element: <Pricing />,
        errorElement: <ErrorPage />
    },
    {
        path: "/purseflex/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
