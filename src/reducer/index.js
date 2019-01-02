/**
 * Created by mumarm45 on 13/12/2018.
 */
import {combineReducers} from "redux";

import todos from "./todos";
import goals from "./goals";
import loading from "./loading";

export default combineReducers({
    todos, goals, loading,
});