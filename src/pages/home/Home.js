import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddBudgetForm from "../../components/addBudget/AddBudgetForm";
import CreateUser from "../../components/navbar/create/CreateUser";
import { createBudget, disabledButton, fetchData } from "../../Helpers";
import "./Home.css";

// home page loader
export function homeLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

// home page action
export async function homeAction({ request }) {
  await disabledButton()
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    // save data to local storage
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(
        `Hey ${values.userName}, Welcome to Finance Tracker App`
      );
    } catch (error) {
      throw new Error("Your account couldn't be created, please try again.");
    }
  }
  if (_action === "createBudget") {
    try {
      // create budget and save in the local storage
      createBudget({
        name: values.addNewBudget,
        amount: values.addNewAmount,
      });

      return toast.success("Your Budget is created successfully");
    } catch (error) {
      throw new Error("Your Budget could not be created, please try again.");
    }
  }
}

export default function Home() {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="home-message">
          {" "}
          <h2>Welcome back, {userName}</h2>
          <div className="home-budget">
            {/* {budgets ? (): ()} */}
            <div className="home-budget-form-container">
              <div className="home-budget-form">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CreateUser />
      )}
    </>
  );
}
