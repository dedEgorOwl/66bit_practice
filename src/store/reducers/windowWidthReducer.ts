import { WindowWidthAction, WindowWidthActionTypes, WindowWidthState } from "../../types/windowWidth";

const initialState: WindowWidthState = {
    current: null,
};

export const windowWidthReducer = (state: WindowWidthState = initialState, action: WindowWidthAction): WindowWidthState => {
    switch (action.type) {
        case WindowWidthActionTypes.SET_WINDOW_WIDTH:
            return { current: action.payload };
        default:
            return state;
    }
};
