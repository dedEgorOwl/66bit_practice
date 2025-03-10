export enum EmployeeListActionTypes {
    SET_EMPLOYEE_LIST = "SET_EMPLOYEE_LIST",
    SET_IS_EMPLOYEES_FETCHING = "SET_IS_EMPLOYEES_FETCHING",
}

type Employee = {
    id: Number | null;
    name: String | null;
    photo: String | null;
    phone: String | null;
    gender: String | null;
    position: String | null;
    stack: Array<String> | null;
    birthdate: String | null;
    dateOfEmployment: String | null;
};

export interface EmployeeListState {
    data: Array<Employee>;
    status: Number;
    isFetching: boolean;
}

export interface EmployeeListAction {
    type: EmployeeListActionTypes;
    payload: EmployeeListState | boolean;
}
