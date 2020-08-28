export const LOGIN_USER = "LOGIN_USER";

const initialState = {
  loggedInUser: "",
};

export const PortalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.loggedInUser,
      };

    default:
      return state;
  }
};
