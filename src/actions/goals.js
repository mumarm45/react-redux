/**
 * Created by mumarm45 on 12/12/2018.
 */
import API from 'goals-todos-api';
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

let addGoalAction = (goal) => {
    return {
        type: ADD_GOAL,
        goal
    }
};
let removeGoalAction = (id) => {
    return {
        type: REMOVE_GOAL,
        id
    }
};

export let handelDeleteGoal = (goal) => {
    return (dispatch) => {
        dispatch(removeGoalAction(goal.id));
        API.deleteGoal(goal.id).catch(() => {
            dispatch(addGoalAction(goal));
            alert('Error has occurred');
        });
    }
};
export let handelAddGoal = (name, callback) => {
    return (dispatch) => {
        API.saveGoal(name).then((goal) => {
            dispatch(addGoalAction(goal));
            callback();
        }).catch(() => {
            alert('Error')
        })
    }
};