import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/login";
import Register from "../components/register";
import Cart from "../components/CartPage";
import CartPage from "../components/CartPage";
import CheckoutPage from "../components/CheckoutPage";
import AdminRoute from "./AdminRoute";
import SingleBook from "../pages/Home/SingleBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/orders",
          element: <div>orders</div>
        },
        {
          path: "/Login",
          element: <Login/>
        },
        {
          path: "/Register",
          element: <Register/>
        },
        {
          path: "/CartPage",
          element: <CartPage/>
        },
        {
          path: "/CheckoutPage",
          element: <CheckoutPage/>
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        }
        
      ]
    },
    // {
    //   path: "/dashboard",
    //   element: <AdminRoute><div>Admin Dashboard</div></AdminRoute>,
    //   children: [
    //     {
    //       path: "",
    //       element:  <AdminRoute><div>Dashboard Home</div></AdminRoute>
    //     },
    //     {
    //       path: "add-new-book",
    //       element: <AdminRoute><div>Add Book</div></AdminRoute>
    //     },
    //     {
    //       path: "edit-book/:id",
    //       element: <AdminRoute><div>Edit Book</div></AdminRoute>
    //     },
    //     {
    //       path: "manage-books/:id",
    //       element: <div>Manage Books</div>
    //     }

    //   ]

    // }
  ]);

  export default router;  