import { CurrentEmployeeAction, CurrentEmployeeActionTypes, CurrentEmployeeState } from "../../types/currentEmployee";

const initialState: CurrentEmployeeState = {
    current: {
        id: null,
        name: null,
        photo: null,
        phone: null,
        gender: null,
        position: null,
        stack: null,
        birthdate: null,
        dateOfEmployment: null,
    },
};

export const themeReducer = (state: CurrentEmployeeState = initialState, action: CurrentEmployeeAction): CurrentEmployeeState => {
    switch (action.type) {
        case CurrentEmployeeActionTypes.SET_CURRENT_EMPLOYEE:
            return { current: action.payload };
        default:
            return state;
    }
};
