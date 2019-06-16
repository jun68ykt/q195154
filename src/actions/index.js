import axios from "axios";
import { GET_GENDERS } from "./types";

export const getGenders = () => async dispatch => {
  try {
    const response = await axios.get("http://localhost:3090/gender");
    dispatch({ type: GET_GENDERS, payload: response.data });
  } catch (e) {
    console.log("error");
  }
};

export default {
  getGenders
}
