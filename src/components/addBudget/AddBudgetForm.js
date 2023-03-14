import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
import "./AddBudjetForm.css";

export default function AddBudgetForm() {
  // react router useFetcher
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  // clear (reset) the add budget form after submitting
  const addBudgetFormRef = useRef();

  // refocus the form to Budget form
  const focusForm = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      addBudgetFormRef.current.reset();
      focusForm.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-container">
      <h3>Create Budget</h3>
      <fetcher.Form
        method="post"
        className="create-budget-form"
        ref={addBudgetFormRef}
      >
        <div className="create-budget-form-info">
          <label htmlFor="addNewBudget">Budget Name</label>
          <input
            type="text"
            name="addNewBudget"
            id="addNewBudget"
            placeholder="e.g., Clothing"
            required
            ref={focusForm}
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
        <input type="hidden" name="_action" value="createBudget" />
        <button
          className="create-budget-button"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Creating Budget...</span>
          ) : (
            <>
              {" "}
              <span>Create Budget</span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}
