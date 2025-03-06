import { combineReducers } from "redux";

import { themeReducer } from "./themeReducer";
import { windowWidthReducer } from "./windowWidthReducer";
import { currentEmployeeReducer } from "./currentEmployeeReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    windowWidth: windowWidthReducer,
    currentEmployee: currentEmployeeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
