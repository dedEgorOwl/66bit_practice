export enum WindowWidthActionTypes {
    SET_WINDOW_WIDTH = "SET_WINDOW_WIDTH",
}

export interface WindowWidthState {
    current: Number | null;
}

export interface WindowWidthAction {
    type: WindowWidthActionTypes;
    payload: Number;
}
