import { SET_ACTIVE_TITLE } from "../constant/constant";
import { headerTitle } from "../data/data"

const initialState = {
    activeTitle: headerTitle[0].link
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ACTIVE_TITLE:
            return {
                ...state,
                activeTitle: payload
            };
        default:
            return state;
    }
}
