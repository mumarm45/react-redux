/**
 * Created by mumarm45 on 12/12/2018.
 */
import API from "goals-todos-api";
export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(todos, goals) {
    return {
        type: RECEIVE_DATA, goals, todos
    }
}
export let handelReceiveData = () => {
    return (dispatch) => {
        return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
            dispatch(receiveDataAction(todos, goals));
        });
    }
};