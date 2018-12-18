/**
 * Created by mumarm45 on 13/12/2018.
 */
import React, {Component} from "react";
import {handelAddTodo, handelDeleteTodo, handleToggleTodo} from "../actions/todos";
import {connect} from "react-redux";
import List from "./List";
class Todo extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        this.input.value && this.props.dispatch(handelAddTodo(this.input.value, () => this.input.value = ''));
    };
    removeItem = (todo) => {
        this.props.dispatch(handelDeleteTodo(todo));
    };
    toggleItem = (todo) => {
        this.props.dispatch(handleToggleTodo(todo));
    };

    render() {
        return (
            <div>
                <p>Todo</p>
                <input
                    type="text"
                    placeholder="Add todo"
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List toggleItem={this.toggleItem} removeItem={this.removeItem} items={this.props.todos}/>
            </div>
        )
    }
}

export default connect((state) => ({
    todos:state.todos
}))(Todo);