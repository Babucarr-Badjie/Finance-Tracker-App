// generate random color
const generateRandomcolor = () => {
  const existingBugetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBugetLength * 34} 65% 50%`
};

// Local Storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create Budget
export const createBudget = ({ name, amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name: name,
    createdTime: Date.now(),
    amount: +amount,
    color: generateRandomcolor(),
  };
  const existingBudget = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudget, newBudget])
  );
};

// Delete the user when click on "delete user button"
export const deleteUser = ({ key }) => {
  return localStorage.removeItem(key);
};
