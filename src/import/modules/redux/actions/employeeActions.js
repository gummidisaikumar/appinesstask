import { EmployeeData } from '../../../utilies/EmployeeData';



export const GET_EMPLOYEE = "GET_EMPLOYEE";


const employee = {
  type: GET_EMPLOYEE,
  payload: EmployeeData
};

export default employee;