import { useRoutes } from "react-router";

import Home from "../pages/Home"
import About from "../pages/About"
import Error404 from "../pages/Error404"

export default function Router(){

    let element = useRoutes([
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
    ])
    return element;
}