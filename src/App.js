/*
* header
*  -logo
*  -nav
* Body
*  - search
*  - restaurantContainer
*    - Restaurant card
       -image
       -rating
       -
* Footer
* - copy right
* - links
* - address
* - contact
*/
import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)
// lazy loading  
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
};
 
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,

    children:[
      {
        path: "/",
        element: <Body/>,

      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/grocery",
        element: <Suspense><Grocery/></Suspense>,
      }

    ],
    errorElement: <Error/>,
  },  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);