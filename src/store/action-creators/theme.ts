import { Dispatch } from "redux";
import { ThemeAction, ThemeActionTypes } from "../../types/theme";

export const switchTheme = () => {
    return (dispatch: Dispatch<ThemeAction>) => {
        dispatch({ type: ThemeActionTypes.SWITCH_THEME });
    };
};
