import axios from "axios";

export const getAll = () => async (dispatch) => {
  const rpta = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({
    type: "getAll",
    payload: rpta.data,
  });
};
