/**
 * Created by mumarm45 on 13/12/2018.
 */
import React, {Component} from "react";
import {handelAddGoal, handelDeleteGoal} from "../actions/goals";
import {connect} from "react-redux";
import List from "./List";
class Goal extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        this.input.value && this.props.dispatch(handelAddGoal(this.input.value, () => this.input.value = ''));
    };
    removeItem = (goal) => {
        this.props.dispatch(handelDeleteGoal(goal));
    };

    render() {
        return (
            <div>
                <div>
                    <p>Goal</p>
                    <input
                        type="text"
                        placeholder="Add goal"
                        ref={(input) => this.input = input}
                    />
                    <button onClick={this.addItem}>Add Goal</button>
                    <List removeItem={this.removeItem} items={this.props.goals}/>
                </div>
            </div>
        )
    }
}
export  default connect((state) => ({
    goals : state.goals
}))(Goal);