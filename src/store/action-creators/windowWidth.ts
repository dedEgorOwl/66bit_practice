import { Dispatch } from "redux";
import { WindowWidthAction, WindowWidthActionTypes } from "../../types/windowWidth";

export const setWindowWidth = (payload: Number) => {
    return (dispatch: Dispatch<WindowWidthAction>) => {
        dispatch({ type: WindowWidthActionTypes.SET_WINDOW_WIDTH, payload: payload });
    };
};
