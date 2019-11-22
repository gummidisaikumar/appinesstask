import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";


const allReducer = combineReducers({
  employee: employeeReducer,
  });
  
  
  export default allReducer;