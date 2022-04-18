const INITIAL_STATE = {
  users: [1, 2, 4],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "getAll":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default reducer;
