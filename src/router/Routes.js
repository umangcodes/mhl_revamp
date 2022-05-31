import { useRoutes } from "react-router";

import Home from "../pages/Home"
import About from "../pages/About"
import Error404 from "../pages/Error404"
import BasicLayout from "../layout/BasicLayout";
export default function Router(){

    let element = useRoutes([
        {
            path: "/",
            element: <BasicLayout />,
            children: [
                {
            path:"/",
            element: <Home />
            },
        {
            path:"/about",
            element: <About />
        },
        {
            path:"*",
            element: <Error404 />
        },
            ]
        
    }
    ])
    return element;
}