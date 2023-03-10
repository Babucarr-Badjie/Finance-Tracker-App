import { useLoaderData } from "react-router-dom";
import { fetchData } from "../Helpers";

// home page loader
export function homeLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export default function Home() {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      Home
    </div>
  );
}
