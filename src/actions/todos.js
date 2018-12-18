/**
 * Created by mumarm45 on 12/12/2018.
 */
import API from "goals-todos-api";
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
};
let removeTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
};

export let toggleTodoAction = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
};
export let handelDeleteTodo = (todo) => {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id));
        API.deleteTodo(todo.id).catch(() => {
            dispatch(addTodoAction(todo));
            alert('Error has occurred');
        });
    }
};
export let handelAddTodo = (name, callback) => {
    return (dispatch) => {
        API.saveTodo(name).then((todo) => {
            dispatch(addTodoAction(todo));
            callback();
        });
    };

};

export let handleToggleTodo = (todo) => {
    return (dispatch) => {
        dispatch(toggleTodoAction(todo.id));
        API.saveTodoToggle(todo.id).catch(() => {
            dispatch(toggleTodoAction(todo.id));
            alert('error');
        });
    };
};