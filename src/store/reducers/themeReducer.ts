import { ThemeAction, ThemeActionTypes, ThemeState } from "../../types/theme";

const initialState: ThemeState = {
    current: "light",
};

export const themeReducer = (state: ThemeState = initialState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case ThemeActionTypes.SWITCH_THEME:
            if (state.current === "light") return { current: "dark" };
            return { current: "light" };
        default:
            return state;
    }
};
