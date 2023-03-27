import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../components/Root";
import HomeView from "../components/HomeView";
import About from "../components/About";
import Portfolios from "../components/Portfolios";



const router = createBrowserRouter([

    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomeView/>
            },
            {
                path: "/resume",
                element: <About/>
            },
            {
                path: "/portfolio",
                element: <Portfolios/>
            },
        ]
    }
]);

export default router