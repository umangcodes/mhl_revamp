import { useRoutes } from "react-router";

import Home from "../pages/Home"
import About from "../pages/About"
import Error404 from "../pages/Error404"
import BasicLayout from "../layout/BasicLayout";
import ContactUs from "../pages/ContactUs";
import Locations from "../pages/Locations"
import LocationDetails from "../pages/LocationDetails"

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
            path:"/contact-us",
            element: <ContactUs />
        },
        {
            path:"*",
            element: <Error404 />
        },
        {
            path:"/location",
            element: <Locations />
        },
        {
            path:"/location/:locationId",
            element: <LocationDetails />
        },
            ]
        
    }
    ])
    return element;
}