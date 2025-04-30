import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Order from "../components/Order";
import PrivatesRouters from "./PrivatesRouters";

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
                element: <PrivatesRouters>
                    <Order></Order>
                </PrivatesRouters>
            }
        ]
    }
])