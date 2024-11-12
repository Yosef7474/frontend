import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/login";
import Register from "../components/register";
import Cart from "../components/CartPage";
import CartPage from "../components/CartPage";

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
        }
        
      ]
    },
  ]);

  export default router;  