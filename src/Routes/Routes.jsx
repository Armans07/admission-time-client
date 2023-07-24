import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Colleges from "../RouteComponant/Colleges";
import PrivetRoute from "./PrivetRoute";
import College from "../Home/College";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Details from "../Shared/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: '/college',
        element: <College></College>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'colleges',
        element: <PrivetRoute><Colleges></Colleges></PrivetRoute>
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`college.json/${params.id}`)

      }
    ],


  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  },
  {
    path: '/forgot',
    element: <ForgotPassword></ForgotPassword>
  }
]);

export default router;