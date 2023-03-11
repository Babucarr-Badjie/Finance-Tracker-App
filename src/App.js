import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { homeAction, homeLoader } from "./pages/home/Home";
import Error from "./pages/error/Error";
import MainLayout, { mainLayoutLoader } from "./layouts/MainLayout";
import { logoutAction } from "./actions/Logout";

// react tostify import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: mainLayoutLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        action: homeAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* render ToastContainer from react toastify */}
      <ToastContainer />
    </div>
  );
}

export default App;
