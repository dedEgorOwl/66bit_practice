import { combineReducers } from "redux";

import { themeReducer } from "./themeReducer";
import { windowWidthReducer } from "./windowWidthReducer";
import { currentEmployeeReducer } from "./currentEmployeeReducer";
import { employeeListReducer } from "./employeeListReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    windowWidth: windowWidthReducer,
    currentEmployee: currentEmployeeReducer,
    employeeList: employeeListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
