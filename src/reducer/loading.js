/**
 * Created by mumarm45 on 13/12/2018.
 */
import {RECEIVE_DATA} from "../actions/common";

let loading = (state = true, action) => {
    switch (action.type) {
        case  RECEIVE_DATA:
            return false;
        default:
            return state;
    }
};

export default loading;