import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components//RestaurantMenuu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";


const Instamart = lazy(() => import("./components/Instamart"));
//upon on demand loading -> upon render --> suspend loading

const About = lazy(() => import("./components/About"));


const AppLayout = () => {
    return (
         <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
         </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement : <Error />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading....</h1>}><About /> </Suspense> ,
                children : [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/Instamart",
                element: (<Suspense fallback= {<Shimmer />}><Instamart /></Suspense>)
            }
            
        ]
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);