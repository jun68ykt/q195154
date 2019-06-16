import { GET_GENDERS } from "../actions/types";

const INITIAL_STATE = {
  result: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_GENDERS:
      return { ...state, result: action.payload };
    default:
      return state;
  }
}
