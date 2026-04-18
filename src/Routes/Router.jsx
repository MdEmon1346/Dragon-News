import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOutes/HomeLayout";
import Home from "../components/homeLayout/Pages/Home";
import CategoryNews from "../components/homeLayout/Pages/CategoryNews";
import Login from "../components/homeLayout/Pages/Login";
import Register from "../components/homeLayout/Pages/Register";
import AuthLayout from "../LayOutes/AuthLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: async () => {
          const res = await fetch("/news.json");
          const data = await res.json();
          return data;
        },
        HydrateFallback: () => (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            Loading news...
          </div>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default Router;
