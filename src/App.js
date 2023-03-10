import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainLayout, { mainLayoutLoader } from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: mainLayoutLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
