import { Dispatch } from "redux";
import { ThemeAction, ThemeActionTypes } from "../../types/theme";

export const switchTheme = () => {
    return (dispatch: Dispatch<ThemeAction>) => {
        dispatch({ type: ThemeActionTypes.SWITCH_THEME });
    };
};

export const setTheme = (payload: "light" | "dark") => {
    return (dispatch: Dispatch<ThemeAction>) => {
        dispatch({ type: ThemeActionTypes.SET_THEME, payload: payload });
    };
};
