import { ThemeAction, ThemeActionTypes, ThemeState } from "../../types/theme";
import { cookies } from "../../App";

const initialState: ThemeState = {
    current: "light",
};

export const themeReducer = (state: ThemeState = initialState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case ThemeActionTypes.SWITCH_THEME:
            if (state.current === "light") {
                cookies.set("current_theme", "dark");
                return { current: "dark" };
            }
            cookies.set("current_theme", "light");
            return { current: "light" };
        case ThemeActionTypes.SET_THEME:
            return { current: action.payload };
        default:
            return state;
    }
};
