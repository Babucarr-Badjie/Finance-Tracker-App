// Local Storage

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Delete the user when click on "delete user button"
export const deleteUser = ({ key }) => {
  return localStorage.removeItem(key);
};
