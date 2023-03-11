import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import CreateUser from "../../components/navbar/create/CreateUser";
import { fetchData } from "../../Helpers";

// home page loader
export function homeLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// home page action
export async function homeAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  // save data to local storage
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(
      `Hey ${formData.userName}, Welcome to Finance Tracker App`
    );
  } catch (error) {
    throw new Error("Your account couldn't be created, please try again.");
  }
}

export default function Home() {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <CreateUser />}</>;
}
