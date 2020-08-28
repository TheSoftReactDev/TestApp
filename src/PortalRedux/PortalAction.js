export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (loggedInUser) => ({
  type: LOGIN_USER,
  loggedInUser,
});
