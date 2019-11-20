export const GET_EMPLOYEE = "GET_EMPLOYEE";
import employeeData from '../../../utilies/EmployeeData';

const employee = {
  type: GET_EMPLOYEE,
  payload: employeeData
};

export default employee;