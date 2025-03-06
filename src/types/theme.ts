export enum ThemeActionTypes {
    SWITCH_THEME = "SWITCH_THEME",
    SET_THEME = "SET_THEME",
}

export interface ThemeState {
    current: "light" | "dark";
}

export interface ThemeAction {
    type: ThemeActionTypes;
    payload?: "light" | "dark";
}
