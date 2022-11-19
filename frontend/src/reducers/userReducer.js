const user = localStorage.getItem("user");
const userReducer = (state = user ? JSON.parse(user) : null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "GET_USER":
      return { ...state, ...action.payload };
    case "REGISTER":
      return action.payload;
    case "ACTIVATE_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

export default userReducer;
