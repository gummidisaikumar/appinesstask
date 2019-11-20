import { GET_EMPLOYEE } from '../actions/employeeActions';

const employeeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_EMPLOYEE:
      return { employee: payload};

    default:
      return state;
  }
};

export default employeeReducer;