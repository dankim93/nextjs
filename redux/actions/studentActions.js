//types
export const ADD_STUDENT = "ADD_STUDENT";

//creator
export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: { student },
});
