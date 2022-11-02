const user = localStorage.getItem("user");
const userReducer = (state = user ? JSON.parse(user) : null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "REGISTER":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
