import { ADD_STUDENT } from "../actions/studentActions";

const initialState = {
  students: [],
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload.student],
      };
    default:
      return state;
  }
}
