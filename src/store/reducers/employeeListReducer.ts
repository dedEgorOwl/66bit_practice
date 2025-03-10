import { EmployeeListAction, EmployeeListActionTypes, EmployeeListState } from "./../../types/employeeList";
const initialState: EmployeeListState = { data: [], status: 0, isFetching: false };

export const employeeListReducer = (state: EmployeeListState = initialState, action: EmployeeListAction): EmployeeListState => {
    switch (action.type) {
        case EmployeeListActionTypes.SET_EMPLOYEE_LIST:
            return action.payload;
        case EmployeeListActionTypes.SET_IS_EMPLOYEES_FETCHING:
            return { data: [], status: 0, isFetching: action.payload };
        default:
            return state;
    }
};
