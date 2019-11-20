import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";


const allReducer = combineReducers({
    Employee: employeeReducer,
  });
  
  
  export default allReducer;