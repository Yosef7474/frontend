import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/login";
import Register from "../components/register";

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
        }
        
      ]
    },
  ]);

  export default router;  