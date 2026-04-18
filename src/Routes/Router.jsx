import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOutes/HomeLayout";
import Home from "../components/homeLayout/Pages/Home";
import CategoryNews from "../components/homeLayout/Pages/CategoryNews";

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
          const data = await res.json(); // ✅ JSON parse করে array return করো
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
    element: <h2>Authentication Layout</h2>,
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
