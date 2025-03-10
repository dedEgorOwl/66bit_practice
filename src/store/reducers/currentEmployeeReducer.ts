import { CurrentEmployeeAction, CurrentEmployeeActionTypes, CurrentEmployeeState } from "../../types/currentEmployee";

const initialState: CurrentEmployeeState = {
    id: null,
    name: null,
    photo: null,
    phone: null,
    gender: null,
    position: null,
    stack: null,
    birthdate: null,
    dateOfEmployment: null,
};

export const currentEmployeeReducer = (state: CurrentEmployeeState = initialState, action: CurrentEmployeeAction): CurrentEmployeeState => {
    switch (action.type) {
        case CurrentEmployeeActionTypes.SET_CURRENT_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
};
