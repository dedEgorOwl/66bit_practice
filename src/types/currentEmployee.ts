export enum CurrentEmployeeActionTypes {
    SET_CURRENT_EMPLOYEE = "SET_CURRENT_EMPLOYEE",
}

export interface CurrentEmployeeState {
    current: {
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
}

export interface CurrentEmployeeAction {
    type: CurrentEmployeeActionTypes;
    payload: CurrentEmployeeState;
}
