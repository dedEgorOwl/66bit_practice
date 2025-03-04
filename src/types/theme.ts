export enum ThemeActionTypes {
    SWITCH_THEME = "SWITCH_THEME",
}

export interface ThemeState {
    current: "light" | "dark";
}

export interface ThemeAction {
    type: ThemeActionTypes.SWITCH_THEME;
}
