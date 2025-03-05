import { CurrentEmployeeActionTypes } from "./../../types/currentEmployee";
import { Dispatch } from "redux";
import { CurrentEmployeeAction } from "../../types/currentEmployee";

export const setCurrentEmployee = () => {
    return (dispatch: Dispatch<CurrentEmployeeAction>) => {
        dispatch({ type: CurrentEmployeeActionTypes.SET_CURRENT_EMPLOYEE });
    };
};
