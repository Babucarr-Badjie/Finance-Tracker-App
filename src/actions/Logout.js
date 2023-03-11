import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteUser } from "../Helpers";

export async function logoutAction() {
  // delete user
  deleteUser({
    key: "userName",
  });
  toast.success("You have successfully deleted your account");

  // redirect to home page
  return redirect("/");
}
