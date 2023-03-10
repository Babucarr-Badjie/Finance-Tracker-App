import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../Helpers";
import footerLogo from "../assets/images/footerLogo.svg";
import "./MainLayout.css";
import Navbar from "../components/navbar/Navbar";

// mainLayout page loader
export function mainLayoutLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export default function MainLayout() {
  const { userName } = useLoaderData();
  return (
    <div className="main-container">
      <Navbar userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={footerLogo} alt="footerlogo" />
    </div>
  );
}
