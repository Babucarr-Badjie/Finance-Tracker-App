import { Form } from "react-router-dom";
import "./AddBudjetForm.css";

export default function AddBudgetForm() {
  return (
    <div className="form-container">
      <h3>Create budget</h3>
      <Form method="post" className="create-budget-form">
        <div className="create-budget-form-info">
          <label htmlFor="addNewBudget">Budget Name</label>
          <input
            type="text"
            name="addNewBudget"
            id="addNewBudget"
            placeholder="e.g., Clothing"
            required
          />
        </div>
        <div className="create-budget-form-info">
          <label htmlFor="addNewAmount">Amount</label>
          <input
            type="number"
            step="0.1"
            name="addNewAmount"
            id="addNewAmount"
            placeholder="e.g., $500"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget"/>
        <button className="create-budget-button" type="submit">
          <span>Create Budget</span>
        </button>
      </Form>
    </div>
  );
}
