import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/routers/Home";
import Profile from "./components/routers/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
