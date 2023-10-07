import { createBrowserRouter } from "react-router-dom";
import Root from "../Main Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import CategoryNews from "../Components/Category News/CategoryNews";
import PrivateRoute from "../Components/Private route/PrivateRoute";
import NewsDetails from "../Components/Shared/News Details/NewsDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
        ,
        {
          path: '/about',
          element: <About></About>
        }
        ,
        {
          path: '/career',
          element: <Career></Career>
        },
        {
          path: '/privateRoute',
          element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
        }

      ]
    },
  ]);

  export default router;