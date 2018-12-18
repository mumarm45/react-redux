/**
 * Created by mumarm45 on 13/12/2018.
 */
import {ADD_TODO} from "../actions/todos";
import {ADD_GOAL} from "../actions/goals";

let checker = (store) => (next) => (action) => {
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().indexOf('bitcoin') !== -1) {
        return alert('bad idea');
    }
    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().indexOf('bitcoin') !== -1) {
        return alert('bad idea');
    }
    return next(action);
};
export default checker;