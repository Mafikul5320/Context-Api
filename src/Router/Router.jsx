import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Order from "../components/Order";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/order",
                Component: Order
            }
        ]
    }
])