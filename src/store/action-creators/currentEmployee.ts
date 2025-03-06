import { CurrentEmployeeActionTypes, CurrentEmployeeAction } from "./../../types/currentEmployee";
import { Dispatch } from "redux";

export const setCurrentEmployee = () => {
    return (dispatch: Dispatch<CurrentEmployeeAction>) => {
        dispatch({ type: CurrentEmployeeActionTypes.SET_CURRENT_EMPLOYEE });
    };
};
